# The VoiceDeck Podcast Application  

A feature-rich podcast application that allows users to explore a a "deck" range of podcasts, manage their favorites, and track their listening history. Built with React, Tailwind CSS, and Framer Motion for a seamless and interactive user experience.  

## Features  

- **Dynamic Header:** Fixed branding header with the app's logo and title.  
- **Interactive Navbar:** Animated sidebar navigation with options for Dashboard, Favourites, and Clear Listen History.  
- **Podcast Previews:** Displays podcast tiles with titles, genres, seasons, and the last updated date.  
- **Genre Filtering:** Dynamically maps genre IDs to readable names.  
- **Listening History Management:** Users can clear listening history while retaining favorites.  
- **Responsive Design:** Optimized layout and styles for various screen sizes.  

## Technologies Used  

- **Frontend:** React, TypeScript  
- **Styling:** Tailwind CSS  
- **Animations:** Framer Motion  
- **State Management:** Props and functional handlers  

## Components  

### 1. Header  
A top-level branding component that includes:  
- App logo  
- App title  

### 2. Navbar  
A sidebar navigation component with:  
- Animated transitions using Framer Motion  
- Options for navigating to Dashboard, Favourites, and managing listening history  

### 3. PodcastTile  
Displays individual podcast previews with:  
- Title, image, seasons, genres, and last updated date  
- Clickable tiles for interaction  

### 4. Modal  
A reusable overlay component that:  
- Closes popups or sidebars when clicked  

### 5. LoadIcon  
A customizable loading spinner for indicating loading states.  

### 6 PopUp Component

The `PopUp` component provides detailed information about a podcast, enabling users to interact with seasons, episodes, and playback controls.

### 7 SearchBar Component

The `SearchBar` component provides a dynamic search feature, allowing users to filter content in real-time. It integrates seamlessly with other components to ensure an intuitive user experience.


## Getting Started  

### Installation  

1. Clone the repository:  
   ```bash
   git clone <https://github.com/Mzamo-Ntshaba/CS20240134_WFO2407_GroupD_MzamoNtshaba_DJS11>
   cd CS20240134_WFO2407_GroupD_MzamoNtshaba_DJS11
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
Alternatively you can view the live server here [VoiceDeck Podcast App](https://voicedeckpodcast.netlify.app/)
