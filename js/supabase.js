import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// 🔐 Suas credenciais (publishable)
const SUPABASE_URL = "https://kjigccxaggwtpoosihbl.supabase.co";
const SUPABASE_KEY = "sb_publishable_Rzfa6WmpntiKSlpNDDDgcw_nVcY_Xt7";

window.supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
