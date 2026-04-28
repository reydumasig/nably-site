import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, company } = req.body

  if (!name || !email || !company) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  const { error } = await supabase
    .from('leads')
    .insert({ name, email, company })

  if (error) {
    console.error('Supabase insert error:', error)
    return res.status(500).json({ error: 'Could not save your details. Please try again.' })
  }

  return res.status(200).json({ success: true })
}
