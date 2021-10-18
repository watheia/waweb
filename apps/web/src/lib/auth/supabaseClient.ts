import { createClient } from "@supabase/supabase-js"

const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabase = createClient(url, anonKey)

export { anonKey, url, supabase }
export default supabase
