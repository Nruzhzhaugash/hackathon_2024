/** @type {import('next').NextConfig} */
const nextConfig = {
  // Указываем путь к публичной директории, где будут находиться статические ресурсы
  // По умолчанию, Next.js будет использовать корневую папку проекта public
  // Если вы хотите изменить путь, укажите новый путь в assetPrefix
  // Например, если файлы шрифтов находятся в папке public/fonts, укажите:
  // assetPrefix: '/fonts'
  // Или, если файлы шрифтов находятся в корневой папке public:
  // assetPrefix: '/'
  // Перезапустите сервер Next.js после изменения этой конфигурации
  // assetPrefix: 'YOUR_ASSET_PREFIX', // Если используется

  // assetPrefix: "/fonts",
};

export default nextConfig;
