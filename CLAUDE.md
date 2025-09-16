# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is an NFT sale Web3 application built with Next.js and Web3 technologies:

- **Root directory**: The main Next.js application directory containing all source code
  - `src/app/`: Next.js 13+ app directory with route-based pages
  - `src/components/`: React components including UI components and navigation
  - `src/lib/`: Utility functions and Web3 configuration

## Key Technologies

- **Next.js 15.5.3** with Turbopack for development and builds
- **React 19.1.0**
- **Web3 Stack**: Wagmi, RainbowKit, Viem for blockchain interactions
- **UI**: Tailwind CSS with Radix UI components
- **State Management**: Zustand
- **TypeScript** for type safety

## Development Commands


```bash
cd web

# Development server with Turbopack
npm run dev

# Production build with Turbopack
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Web3 Configuration

The app is configured for both Mainnet and Sepolia testnet:
- Wagmi config in `src/lib/wagmi.ts`
- RainbowKit provider setup in `src/app/providers.tsx`
- Requires `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` environment variable

## Application Pages

- `/`: Home page
- `/mall`: NFT marketplace/mall
- `/nft/presale`: NFT presale page
- `/wallet`: Wallet connection/management

The app includes responsive navigation with desktop and mobile bottom navigation components.