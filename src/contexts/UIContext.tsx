"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UIContextType {
    isQuoteModalOpen: boolean;
    openQuoteModal: () => void;
    closeQuoteModal: () => void;
    isAudioPlaying: boolean;
    toggleAudio: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);

    const openQuoteModal = () => setIsQuoteModalOpen(true);
    const closeQuoteModal = () => setIsQuoteModalOpen(false);
    const toggleAudio = () => setIsAudioPlaying(prev => !prev);

    return (
        <UIContext.Provider value={{
            isQuoteModalOpen, openQuoteModal, closeQuoteModal,
            isAudioPlaying, toggleAudio
        }}>
            {children}
        </UIContext.Provider>
    );
}

export function useUI() {
    const context = useContext(UIContext);
    if (context === undefined) {
        throw new Error('useUI must be used within a UIProvider');
    }
    return context;
}
