import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://kjigccxaggwtpoosihbl.supabase.co'
const supabaseKey = 'sb_publishable_Rzfa6WmpntiKSlpNDDDgcw_nVcY_Xt7'

export const supabase = createClient(supabaseUrl, supabaseKey)
