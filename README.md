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
https://media.licdn.com/dms/image/v2/D4E22AQEIYsTmBo5BrQ/feedshare-shrink_2048_1536/B4EZfe7vRDHYAs-/0/1751791895511?e=1756339200&v=beta&t=QRgqKJrp10oeXgn8nKf43ARnsBGdsF3kMfDbUUsXKNc
https://media.licdn.com/dms/image/v2/D4E22AQHU21Zyn8Tpdg/feedshare-shrink_2048_1536/B4EZfe7vQ0GwAo-/0/1751791895611?e=1756339200&v=beta&t=no5svD3_V2bOI7233VhZ2kZYU_jTC6BOfiGn35MQmag
https://media.licdn.com/dms/image/v2/D4E22AQG-kFrXzYc8TA/feedshare-shrink_2048_1536/B4EZfe7vRqHIAo-/0/1751791893047?e=1756339200&v=beta&t=rfQ5mzu4sLk2dtgmgXTHl_HU6wZWabt8BGhC5q-yUeQ



🙏 Teşekkür
Bu proje, Dr. Öğr. Üyesi Derya Alsancak Arda danışmanlığında ve ekip arkadaşım ile birlikte geliştirilmiştir.

📄 Lisans
MIT License


## 🛠️ Kurulum

```bash
git clone https://github.com/kullaniciadi/proje-adi.git
cd proje-adi
npm install
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
npm start
MetaMask'i localhost 8545 ağına bağlamayı unutmayın.
