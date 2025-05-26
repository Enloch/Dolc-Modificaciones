# Dolc Modificaciones - 3D Product Configurator

A 3D product configurator built with React Three Fiber, allowing interactive visualization and customization of 3D models. The application features a 3D scene with configurable components and materials.

## Features

- Interactive 3D model visualization using Three.js and React Three Fiber
- Real-time material and texture customization
- Responsive design for various screen sizes
- Advanced lighting and environment settings
- Smooth camera controls and animations

## Technologies Used

- React 18
- Three.js
- React Three Fiber (R3F)
- React Three Drei
- MUI (Material-UI) for UI components
- Zustand for state management
- Vite as the build tool

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd Dolc-Modificaciones
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

### Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

This will start the development server at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build files will be created in the `dist` directory.

## Deployment

### FTP Deployment

1. First, build the project for production:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist` directory. You can upload these files to your web server using any FTP client (like FileZilla) or command-line tools.

3. For automated deployment, you can use the following command with lftp:
   ```bash
   lftp -c "open -u USERNAME,PASSWORD ftp.yourdomain.com; mirror -R dist/ /public_html/"
   ```

   Replace:
   - `USERNAME` with your FTP username
   - `PASSWORD` with your FTP password
   - `ftp.yourdomain.com` with your FTP server address
   - `/public_html/` with your target directory on the server

### GitHub Pages Deployment

The project is also configured for GitHub Pages deployment:

1. Update the `homepage` field in `package.json` to your GitHub Pages URL
2. Run the deployment script:
   ```bash
   npm run deploy
   ```

## Project Structure

- `/src` - Source code
  - `/components` - React components
  - `/configs` - Configuration files
  - `/contexts` - React contexts
  - `/public` - Static assets (models, textures, etc.)
  - `/styles` - Global styles
  - `/utils` - Utility functions

## License

[Specify your license here]

## Contact

[Your contact information]