# Mirage AI

Mirage AI is a powerful and intuitive image generation platform that leverages cutting-edge AI technology to transform your ideas into stunning visuals.

## Features

- **Text-to-Image Generation**: Convert your text descriptions into high-quality images using advanced AI models.
- **Customizable Aspect Ratios**: Choose from various aspect ratios including 1:1, 4:3, 16:9, and 9:16 to suit your needs.
- **Responsive Design**: Fully responsive interface that works seamlessly across desktop and mobile devices.
- **Real-time Feedback**: Visual loading indicators and error handling for a smooth user experience.
- **Image Download**: Easily download generated images for further use or sharing.

## Tech Stack

- **Frontend**: React, Next.js 14, Tailwind CSS
- **Backend**: Next.js API Routes (Edge Runtime)
- **AI Integration**: Hugging Face Inference API
- **Image Storage**: Vercel Blob Storage
- **Animation**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/mirage-ai.git
   cd mirage-ai
   ```

2. Install dependencies:

   ```
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:

   ```
   HUGGINGFACE_API_KEY=your_huggingface_api_key
   ```

4. Run the development server:

   ```
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Enter a descriptive prompt in the text input field.
2. Select your desired aspect ratio.
3. Click the "Generate" button to create your image.
4. Once generated, you can download the image using the download button.

## Deployment

This project is set up for easy deployment on Vercel. Simply connect your GitHub repository to Vercel and it will automatically deploy your application.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Hugging Face](https://huggingface.co/) for providing the AI model API
- [Vercel](https://vercel.com/) for hosting and Blob storage
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
