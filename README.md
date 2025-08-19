# Vue.js Learning Journey 🚀

Bu repo, Vue.js öğrenme sürecimde kitap çalışmalarından edindiğim bilgileri pratik uygulamalarla pekiştirdiğim kapsamlı bir öğrenme projesidir. **14 bölüm** boyunca Vue.js'in temel kavramlarından ileri seviye konularına kadar geniş bir yelpazede çalışmalar yaptım.

## 🌐 Canlı Demo

**[https://vue-js-learning-psi.vercel.app/](https://vue-js-learning-psi.vercel.app/)**

## 📚 Proje Hakkında

Bu proje, Vue.js kitabının 14 bölümünü baştan sona tamamlayarak oluşturulmuştur. Her bölümdeki örnekleri uyguladım, kendi denemelerimle genişlettim ve öğrendiklerimi tek bir repository'de topladım. Çalışmalarımı temel alan ana projeyi production ortamına deploy ettim.

## ✨ Özellikler

### 🏗️ Mimari ve Teknolojiler

- **Vue 3** - Composition API ve `<script setup>` syntax
- **Vue Router 4** - SPA routing ve nested routes
- **Pinia** - Modern state management
- **Vite** - Hızlı build tool ve development server
- **Sass/SCSS** - Advanced CSS preprocessing

### 🧪 Test Infrastructure

- **Vitest** - Unit testing framework
- **Cypress** - End-to-end testing
- **@vue/test-utils** - Vue component testing utilities

### 🎨 Komponent Mimarisi

- **Atomic Design** prensipleri (atoms, molecules, organisms, templates)
- **Responsive Design** - Mobile-first approach
- **Component Library** - Tekrar kullanılabilir UI bileşenleri

### 📡 Veri Yönetimi

- **API Integration** - External API'lerden veri çekme
- **Asynchronous Operations** - Promise tabanlı veri akışı
- **Local Storage** - Kullanıcı tercihlerinin kalıcı saklanması
- **State Persistence** - Uygulama durumunun korunması

## 🛠️ Kurulum

### Gereksinimler

- Node.js (v16 veya üzeri)
- npm veya yarn

### Kurulum Adımları

```bash
# Repository'yi klonlayın
git clone https://github.com/mrfiratatalay/vue-js-learning.git

# Proje dizinine girin
cd vue-js-learning

# Bağımlılıkları yükleyin
npm install

# Development server'ı başlatın
npm run dev
```

## 🚀 Kullanım

### Development

```bash
npm run dev          # Development server başlat (http://localhost:5173)
npm run build        # Production build oluştur
npm run preview      # Build'i önizleme modunda çalıştır
```

### Testing

```bash
npm run test:unit              # Unit testleri çalıştır
npm run test:e2e              # E2E testleri çalıştır (production)
npm run test:e2e:dev          # E2E testleri çalıştır (development)
```

### Code Quality

```bash
npm run lint         # ESLint ile kod analizi
npm run format       # Prettier ile kod formatlama
```

## 📁 Proje Yapısı

```
vue-js-learning/
├── 📁 Learning_With_Book/           # Kitap bölümlerine göre organize edilmiş örnekler
│   ├── 📁 000-companion-app/        # Bölüm 0 - Başlangıç kurulumu
│   ├── 📁 001-companion-app/        # Bölüm 1 - Vue temelleri
│   ├── 📁 002/                      # Bölüm 2 - Component basics
│   ├── ...                          # Diğer bölümler (003-018)
│   └── 📁 018/                      # Bölüm 18 - Advanced patterns
├── 📁 src/                          # Ana uygulama kaynak kodları
│   ├── 📁 components/               # Vue bileşenleri (Atomic Design)
│   │   ├── 📁 atoms/                # Temel UI elementleri
│   │   ├── 📁 molecules/            # Birleşik bileşenler
│   │   ├── 📁 organisms/            # Karmaşık bileşenler
│   │   └── 📁 templates/            # Sayfa şablonları
│   ├── 📁 views/                    # Sayfa bileşenleri
│   ├── 📁 router/                   # Vue Router konfigürasyonu
│   ├── 📁 stores/                   # Pinia state stores
│   └── 📁 assets/                   # Statik dosyalar ve stiller
├── 📁 cypress/                      # E2E test dosyaları
├── 📁 dist/                         # Production build çıktıları
└── 📄 package.json                  # Proje bağımlılıkları ve scriptler
```

### Learning_With_Book Klasör Organizasyonu

Her bölüm kendi klasöründe organize edilmiştir ve bağımsız olarak çalıştırılabilir:

- **000-018**: 19 adet bölüm klasörü
- Her klasör kendi `package.json`, `vite.config.js` ve bağımlılıklarını içerir
- Bölüm bazında örnekler ve deneyimler
- İlerleme takibi için commit geçmişi

## 💡 Öğrenilen Konular

### 🔧 Temel Vue.js Kavramları

- **Reactivity System** - Vue'nun reaktivite sistemi
- **Template Syntax** - Directive'ler ve interpolation
- **Component Communication** - Props, events, slots
- **Lifecycle Hooks** - Component yaşam döngüsü

### 🛣️ Routing ve Navigation

- **Vue Router** - SPA routing konfigürasyonu
- **Nested Routes** - İç içe route yapıları
- **Route Guards** - Koruma mekanizmaları
- **Dynamic Routing** - Dinamik parametre yönetimi
- **Alias ve Redirect** - SEO dostu URL yapıları

### 📊 State Management

- **Pinia Stores** - Modern state management
- **State Persistence** - localStorage entegrasyonu
- **Computed Properties** - Türetilmiş state yönetimi
- **Watchers** - State değişiklik takibi

### 🔄 Asynchronous Operations

- **API Integration** - REST API entegrasyonu
- **Error Handling** - Hata yönetimi stratejileri
- **Loading States** - Yükleme durumu yönetimi
- **Data Validation** - Veri doğrulama (VeeValidate)

### 🧪 Testing Strategies

- **Unit Testing** - Vitest ile birim testleri
- **Component Testing** - Vue Test Utils kullanımı
- **E2E Testing** - Cypress ile uçtan uca testler
- **Mocking** - Test doubles ve spy'lar

### 🎨 UI/UX Best Practices

- **Atomic Design** - Komponent tasarım sistemi
- **Responsive Design** - Mobil uyumlu tasarım
- **Accessibility** - Erişilebilirlik standartları
- **Performance Optimization** - Performans iyileştirmeleri

### 🚀 Deployment ve DevOps

- **Vite Build Process** - Modern build pipeline
- **Vercel Deployment** - Cloud deployment
- **Environment Configuration** - Ortam değişkenleri
- **CI/CD Integration** - Otomatik deploy süreçleri

## 🎯 Ana Uygulama Özellikleri

### 📱 Social Media Dashboard

- **Post Creation** - Yeni içerik oluşturma
- **Post Feed** - İçerik akışı görüntüleme
- **User Profiles** - Kullanıcı profil sayfaları
- **Interactive UI** - Dinamik kullanıcı etkileşimleri

### 🔧 Teknik Özellikler

- **Responsive Layout** - Tüm cihazlarda uyumlu
- **API Integration** - DummyAPI ile veri entegrasyonu
- **State Persistence** - Tarayıcı yenilenmesinde veri korunması
- **Error Boundaries** - Graceful error handling
- **Performance Monitoring** - Optimized rendering

## 📈 Proje İstatistikleri

- **📚 Toplam Bölüm**: 14 (000-018 arası 19 klasör)
- **💻 Commit Sayısı**: 66+ commit
- **🧪 Test Coverage**: Unit ve E2E testler mevcut
- **📦 Dependencies**: 20+ modern web teknolojisi
- **🌐 Deploy Status**: Production'da aktif

## 🔗 Yararlı Linkler

- **[Canlı Demo](https://vue-js-learning-psi.vercel.app/)** - Production uygulaması
- **[Vue.js Documentation](https://vuejs.org/)** - Resmi Vue.js dokümantasyonu
- **[Pinia Documentation](https://pinia.vuejs.org/)** - State management
- **[Vite Documentation](https://vitejs.dev/)** - Build tool dokümantasyonu

## 🤝 Katkı

Bu proje kişisel öğrenme amaçlı geliştirilmiştir. Önerileriniz ve geri bildirimleriniz için:

- Issue açabilirsiniz
- Pull request gönderebilirsiniz
- E-posta ile iletişime geçebilirsiniz

## 📧 İletişim

**Fırat Atalay**

- 🐙 GitHub: [@mrfiratatalay](https://github.com/mrfiratatalay)

## 📝 Lisans

Bu proje MIT lisansı altında yayınlanmıştır. Detaylar için `LICENSE` dosyasını inceleyebilirsiniz.

---

⭐ **Bu projeyi beğendiyseniz, star vermeyi unutmayın!**

_Bu README, Vue.js öğrenme sürecimin kapsamlı bir özetini sunmaktadır. Sürekli güncellenmekte ve geliştirilmektedir._
