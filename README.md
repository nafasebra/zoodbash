# Zoodbash — A Small Reminder of the Value of Time

**Zoodbash** is a minimal Chrome new-tab extension built around a simple idea: **time is limited, and every day matters.**

Instead of showing another dashboard full of widgets and information, Zoodbash displays a clean, distraction-free Jalali (Persian) calendar inspired by bullet journals.

The idea is to make the passage of time more visible and encourage a little more awareness of how we spend our days.

## The Idea Behind the Project

We open new browser tabs countless times, often without thinking about it.

I wanted to turn this everyday interaction into a small reminder of something important: time keeps moving, whether we notice it or not.

Zoodbash wasn't intended to become a complex productivity application. Its purpose was to communicate a simple idea through an equally simple interface.

**Sometimes, a small visual reminder is enough to make us think differently about our time.**

## Video Tutorial

I built this project and recorded a step-by-step tutorial explaining how to create a Chrome new-tab extension using React and Vite.

The tutorial is available in **Persian (Farsi)**, and this repository contains its source code.

[Watch the Tutorial on YouTube](https://youtu.be/c_33pa216Kk)

## Features

- Jalali (Persian) calendar
- Minimal, bullet-journal-inspired interface
- Chrome new-tab replacement
- Lightweight implementation
- No unnecessary browser permissions

## Technical Decisions

### Why Keep It Simple?

One of my main goals was to avoid overengineering.

The project has a small and well-defined purpose, so I deliberately avoided introducing unnecessary architectural layers, dependencies, or features.

I wanted the implementation to remain easy to understand, especially since the source code would also be used in an educational video.

### Why React and Vite?

I used React to build the user interface with reusable components and Vite to handle development and production builds.

Rather than introducing a dedicated browser extension framework, I used Vite's existing build capabilities and a standard Chrome Extension Manifest V3 configuration.

This kept the setup straightforward while still allowing me to use familiar frontend development tools.

### Why dayjs and jalaliday?

Since the application uses the Jalali calendar, I chose `dayjs` and `jalaliday` instead of implementing calendar conversion and date handling from scratch.

This allowed me to focus on the interface and the idea behind the project rather than spending time solving an already well-supported problem.

### Why No Additional Extension Permissions?

The extension's primary responsibility is replacing the default new-tab page.

It doesn't need access to browsing history, open tabs, or other sensitive browser capabilities to accomplish that.

Keeping the permissions empty follows the principle of requesting only the capabilities an application actually needs.

## What I Learned

**1. Browser Extension Development**

I explored how Chrome extensions are structured, how Manifest V3 works, and how a regular web interface can be used as a custom new-tab page.

**2. Working With Vite Outside Traditional Web Apps**

This project helped me better understand how Vite's build system can be used for something other than a typical website.

**3. Keeping Complexity Proportional to the Problem**

Not every project needs a sophisticated architecture or additional tooling. Sometimes the simplest implementation is the most appropriate one.

**4. Working With the Jalali Calendar**

I gained practical experience handling Persian calendar dates using existing libraries.

**5. Sharing Technical Knowledge**

Recording a tutorial for this project gave me an opportunity to explain the implementation, organize the development process into understandable steps, and share the source code with other developers.

## Tech Stack

- **React** — User interface
- **TypeScript** — Type-safe development
- **Vite** — Development and production builds
- **Tailwind CSS** — Styling
- **dayjs & jalaliday** — Jalali calendar and date handling
- **Chrome Extension Manifest V3** — Browser integration

## Getting Started

Clone the repository:

```bash
git clone https://github.com/nafasebra/zoodbash.git
cd zoodbash
```

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Build the project:

```bash
pnpm build
```

### Load as a Chrome Extension

1. Open `chrome://extensions/` in Chrome.
2. Enable **Developer mode**.
3. Click **Load unpacked**.
4. Select the extension's build directory containing the required `manifest.json`.
5. Open a new tab to see Zoodbash.

## Project Status

**Educational / Personal Project**

Zoodbash was created as a small personal experiment and later shared through a Persian video tutorial.

The project focuses on exploring browser extension development while demonstrating how a simple product idea can be implemented without unnecessary technical complexity.

The source code remains publicly available for learning, experimentation, and reference.

## License

MIT License.
