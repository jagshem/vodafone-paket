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

  const handleReset = () => {
    setStep(1)
  }

  return (
    <div className="container mx-auto mt-10 max-w-screen-md">
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
              <h1 className="mb-4 font-bold">
                <span className="text-2xl mr-5">1.</span>Telefon numarası{' '}
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
        <div className="bg-white shadow-md p-4 md:p-8 w-full mx-auto">
          <div>
            <h4 className="font-bold mb-2">
              <span className="text-2xl mr-5"> 2.</span> Kolay paket seçim
            </h4>
            <p className="font-medium underline text-red-600 text-center text-[15px] mt-6 mb-6">
              Telefon numaranızı girdiğiniz zaman faturanıza uygun paketleri
              göstericez.{' '}
            </p>
            {step === 2 && <div>merhaba</div>}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="bg-white shadow-md p-4 md:p-8 w-full mx-auto">
          <div>
            <h4 className="font-bold mb-2">
              <span className="font-bold text-2xl mr-5">3.</span> Ödeme
            </h4>
            {step === 3 && <div>merhaba 3</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
