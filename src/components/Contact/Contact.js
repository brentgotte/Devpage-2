import Link from 'next/link'

export default function Contact(){

    return(
        <div>
            <section  id="contact">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Feel free to Contact me!</h2>
      
        <div class="flex w-full justify-around mb-4">
        <Link href="https://github.com/brentgotte" target={'_blank'}> <img src='/github2.png' height={60} width={60}/></Link>
        <Link href="https://www.linkedin.com/in/brent-g%C3%B6tte-827717252/"target={'_blank'} > <img src='/linkedin2.png' height={60} width={60}/></Link>
        <Link href="mailto:brent.gotte@gmail.com"> <img src='/mail.png'height={60} width={60}/> </Link>
        </div>


  </div>
</section>

          </div>
        
    )
}
