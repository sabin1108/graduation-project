"use client";

import { useState, useEffect, useCallback } from 'react';
import { useLocalStorage } from './use-local-storage';
import { UIMessage } from '@ai-sdk/react';

export interface Chat {
  id: string;
  name: string;
  messages: UIMessage[];
}

export function useChatHistory() {
  const [chats, setChats] = useLocalStorage<Chat[]>('chatHistory', []);
  const [activeChatId, setActiveChatId] = useLocalStorage<string | null>('activeChatId', null);

  const activeChat = chats.find(chat => chat.id === activeChatId) || null;

  const addChat = useCallback(() => {
    const newChatId = Date.now().toString();
    setChats(prevChats => {
      const newChat: Chat = {
        id: newChatId,
        name: `Chat ${prevChats.length + 1}`,
        messages: [],
      };
      return [...prevChats, newChat];
    });
    setActiveChatId(newChatId);
  }, [setChats, setActiveChatId]);

  const deleteChat = useCallback((chatId: string) => {
    setChats(prevChats => {
      const newChats = prevChats.filter(chat => chat.id !== chatId);
      if (activeChatId === chatId) {
        setActiveChatId(newChats.length > 0 ? newChats[0].id : null);
      }
      return newChats;
    });
  }, [activeChatId, setChats, setActiveChatId]);

  const renameChat = useCallback((chatId: string, newName: string) => {
    setChats(prevChats =>
      prevChats.map(chat =>
        chat.id === chatId ? { ...chat, name: newName } : chat
      )
    );
  }, [setChats]);

  const setActiveChat = (chatId: string) => {
    setActiveChatId(chatId);
  };

  const setMessages = useCallback((messages: UIMessage[]) => {
    setChats(prevChats => {
      const activeChatExists = prevChats.some(chat => chat.id === activeChatId);
      if (activeChatExists) {
        return prevChats.map(chat =>
          chat.id === activeChatId ? { ...chat, messages } : chat
        );
      } else if (messages.length > 0) {
        const newChatId = Date.now().toString();
        const newChat: Chat = {
          id: newChatId,
          name: `Chat ${prevChats.length + 1}`,
          messages,
        };
        setActiveChatId(newChatId);
        return [...prevChats, newChat];
      }
      return prevChats;
    });
  }, [activeChatId, setChats, setActiveChatId]);

  useEffect(() => {
    if (chats.length === 0) {
      addChat();
    } else if (!activeChatId || !chats.some(chat => chat.id === activeChatId)) {
      setActiveChatId(chats[0]?.id || null);
    }
  }, [chats, activeChatId, addChat, setActiveChatId]);

  return {
    chats,
    activeChat,
    addChat,
    deleteChat,
    renameChat,
    setActiveChat,
    messages: activeChat?.messages || [],
    setMessages,
  };
}
