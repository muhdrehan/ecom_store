import Image from 'next/image'
import Navbar from '@/components/navbar'
import Hero from '@/components/Hero'
import Promotion from '@/components/Promotion'
import Products from '@/components/products'
import Moreprod from '@/components/Moreprod'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <div> 
      <Navbar/>
      <Hero/>
      <Promotion/>
      <Products/>
      <Moreprod/>
      <Footer/>
    </div>
    )
}
