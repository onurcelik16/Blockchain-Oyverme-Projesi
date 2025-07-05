# Ethereum Tabanlı Oy Verme DApp

Bu proje, Ethereum blockchain'i üzerinde çalışan, MetaMask ile entegre edilmiş bir merkeziyetsiz oy verme uygulamasıdır. Kullanıcılar MetaMask cüzdanlarını kullanarak giriş yapar, oy verme işlemini gerçekleştirir ve sonuçları görebilirler.

## 🚀 Özellikler

- 🗳️ Adaylara oy verebilme (sadece bir kez)
- 👁️ Gerçek zamanlı oy sayısı (sadece admin görebilir)
- 👮 Admin kontrolü (sonuçları sadece admin görüntüleyebilir)
- 📊 Oy dağılımını görselleştiren grafikler (Chart.js)
- 💼 React.js ile modern kullanıcı arayüzü
- 🔐 MetaMask ile güvenli kullanıcı doğrulama
- ⚙️ Solidity ile yazılmış akıllı sözleşmeler

## 🧱 Teknolojiler

- [Solidity](https://soliditylang.org/) (Akıllı Sözleşmeler)
- [Hardhat](https://hardhat.org/) (Blockchain geliştirme ortamı)
- [React.js](https://reactjs.org/) (Frontend arayüz)
- [MetaMask](https://metamask.io/) (Cüzdan entegrasyonu)
- [Chart.js](https://www.chartjs.org/) (Grafikler)
- [Ethers.js](https://docs.ethers.org/) (Blockchain ile etkileşim)

## 📸 Ekran Görüntüleri

_Ana sayfa, oy verme ekranı ve sonuç sayfasının ekran görüntülerini buraya ekleyebilirsiniz._

## 🛠️ Kurulum

```bash
git clone https://github.com/kullaniciadi/proje-adi.git
cd proje-adi
npm install
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
npm start
