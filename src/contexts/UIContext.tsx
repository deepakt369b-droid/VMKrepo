"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UIContextType {
    isQuoteModalOpen: boolean;
    openQuoteModal: () => void;
    closeQuoteModal: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    const openQuoteModal = () => setIsQuoteModalOpen(true);
    const closeQuoteModal = () => setIsQuoteModalOpen(false);

    return (
        <UIContext.Provider value={{ isQuoteModalOpen, openQuoteModal, closeQuoteModal }}>
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
