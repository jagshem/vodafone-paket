import React, { useState } from 'react'

const Index = () => {
  const [step, setStep] = useState(1)
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleContinue = () => {
    setStep(step + 1)
  }

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value)
  }

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5 text-center text-red-700">
        Kolay Paket Yükle
      </h1>
      <div className="flex justify-center mb-8"></div>
      <div className="flex justify-center">
        <div className="bg-white shadow-md p-4 md:p-8 w-full md:w-3/4 mx-auto">
          {step === 1 && (
            <div>
              <h4 className="font-bold mb-2">
                1. Kolay paket yüklemek istediğiniz telefon numarasını giriniz
              </h4>
              <hr className="mb-2" />
              <input
                type="tel"
                className="border border-gray-300 p-2 w-full mb-2"
                placeholder="Telefon Numarası"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
              <button
                className="bg-red-600 text-white font-semibold px-4 py-2 rounded"
                onClick={handleContinue}
              >
                Devam Et
              </button>
            </div>
          )}
          {step > 1 && (
            <div>
              <h1 className="mb-4 font-bold text-center">
                Girdiğiniz Telefon Numarası
              </h1>
              <p className="font-light text-center">{phoneNumber}</p>
            </div>
          )}

          <div className="container mx-auto mt-10">
            <h4 className="font-bold mb-2">2. Kolay paket seçim</h4>
            {step === 1 && (
              <p>
                Telefon numarası girdiğiniz zaman size uygun paketleri
                göstereceğiz...
              </p>
            )}

            {step === 2 && <div>merhaba</div>}
          </div>

          {step === 3 && (
            <div>
              <h4 className="font-bold mb-2">3. Ödeme</h4>
              {/* 3. adım kutusu içeriği buraya gelecek */}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Index
