import { MongoClient } from 'mongodb'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).end() // Method Not Allowed
    return
  }

  try {
    const client = await MongoClient.connect(
      'mongodb+srv://jags:5flVauHhMmExHEKv@vodafone-packet.ybwntv9.mongodb.net/test',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )

    const db = client.db('vodafone-packet')

    const kisiler = await db.collection('people').find().toArray()
    const krediKartlari = await db.collection('credit_cards').find().toArray()

    client.close()

    res.status(200).json({ kisiler, krediKartlari })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Bir hata oluştu' })
  }
}
