# CS2 Arena

CS2 Arena, Counter-Strike 2 oyuncuları için geliştirilmiş bir turnuva ve eşleşme platformudur. Steam entegrasyonu ile kolay giriş yapabilir, turnuvalara katılabilir ve diğer oyuncularla rekabet edebilirsiniz.

## Özellikler

- 🎮 Steam ile kolay giriş
- 🏆 Turnuva sistemi
- 👥 Takım oluşturma ve yönetme
- 📊 Liderlik tablosu
- 🎯 Eşleşme sistemi
- 🌐 Modern ve responsive tasarım

## Teknolojiler

- **Frontend:**
  - Next.js 14
  - React 19
  - TypeScript
  - Tailwind CSS
  - Lucide Icons

- **Backend:**
  - Node.js
  - Express
  - MySQL
  - Steam API

## Başlangıç

### Gereksinimler

- Node.js 18 veya üzeri
- npm veya yarn
- MySQL
- Steam API anahtarı

### Kurulum

1. Projeyi klonlayın:
   ```bash
   git clone https://github.com/yourusername/cs2-arena.git
   cd cs2-arena
   ```

2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   # veya
   yarn install
   ```

3. `.env` dosyasını oluşturun:
   ```env
   NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
   STEAM_API_KEY=your_steam_api_key
   ```

4. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   # veya
   yarn dev
   ```

5. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## Proje Yapısı

```
cs2-arena/
├── src/
│   ├── app/              # Next.js app router
│   ├── components/       # React bileşenleri
│   ├── contexts/         # React context'leri
│   ├── lib/             # Yardımcı fonksiyonlar
│   ├── types/           # TypeScript tipleri
│   └── styles/          # Global stiller
├── public/              # Statik dosyalar
└── prisma/             # Veritabanı şeması
```

## Katkıda Bulunma

1. Bu depoyu fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Bir Pull Request oluşturun

## Lisans


## İletişim


