"use client"
import React from 'react'

const faq = [
    {
        id:1,
        Question:'Quest-ce que Trekkr ?',
        Ans:" Trekkr est une application de sport en plein air qui vous permet de suivre en temps réel vos activités telles que la randonnée, la course à pied, le VTT, et bien d'autres. Elle offre également des informations essentielles pour assurer votre sécurité et votre plaisir en plein air.",
        active:true
    },
    {
        id:2,
        Question:'Comment fonctionne Trekkr pour la sécurité ?',
        Ans:"Trekkr intègre plusieurs fonctionnalités de sécurité pour assurer une expérience de plein air en toute tranquillité. L'application propose une fonction de suivi en temps réel qui permet à vos proches de suivre votre progression pendant votre randonnée ou votre course. De plus, Trekkr intègre une fonction d'alerte d'urgence qui, en cas de besoin, peut informer automatiquement vos contacts d'urgence avec votre emplacement précis. Il est également possible de définir des zones géographiques sûres pour recevoir des notifications lorsque vous entrez ou quittez ces zones.",
        active:false
    },
    {
        id:3,
        Question:"Quels types d'activités en plein air puis-je suivre avec Trekkr ?",
        Ans:"Trekkr est polyvalent et s'adapte à diverses activités en plein air. Vous pouvez utiliser l'application pour la course à pied, la randonnée, le VTT et bien d'autres activités. Trekkr génère des parcours personnalisés en fonction de votre niveau de compétence et de vos préférences, que vous soyez un coureur débutant ou un randonneur chevronné. Ainsi, que vous préfériez les sentiers de montagne, les pistes forestières ou les parcours urbains, Trekkr vous accompagne pour une expérience adaptée à votre activité préférée.",
        active:false
    },
    {
      id:4,
      Question:"Puis-je partager mes aventures avec d'autres utilisateurs ?",
      Ans:"Absolument ! Trekkr offre la possibilité de partager vos aventures avec d'autres utilisateurs. Vous pouvez publier vos parcours, photos et expériences directement depuis l'application. Cela crée une communauté dynamique où les utilisateurs peuvent s'inspirer mutuellement, échanger des conseils et découvrir de nouveaux endroits passionnants. Le partage social sur Trekkr vise à renforcer la connexion entre les passionnés de plein air et à créer une source d'inspiration pour de nouvelles aventures.",
      active:false
  },
  {
    id:5,
    Question:"Combien coûte l'utilisation de Trekkr ?",
    Ans:"Trekkr propose une version de base gratuite qui comprend des fonctionnalités essentielles telles que le suivi en temps réel, la génération de parcours et les alertes d'urgence. Cependant, pour accéder à des fonctionnalités avancées telles que des statistiques détaillées, des parcours illimités et des options de personnalisation approfondies, Trekkr propose un abonnement premium. Les détails sur les coûts de l'abonnement premium sont disponibles dans la section correspondante de l'application.",
    active:false
},
{
  id:6,
  Question:"Puis-je utiliser Trekkr hors ligne ?",
  Ans:"Oui, Trekkr offre la possibilité d'utiliser l'application hors ligne. Vous pouvez télécharger des cartes et des itinéraires spécifiques avant votre aventure pour une utilisation sans connexion Internet. Cela s'avère particulièrement utile lorsque vous vous trouvez dans des zones éloignées ou avec une connectivité limitée. Assurez-vous de télécharger les cartes nécessaires à l'avance et vous serez prêt à profiter de l'expérience Trekkr même hors ligne.",
  active:false
}
]

const Faqs = () => {
    const [items,setItems] = React.useState(faq)

    const Toggle = (id)=>{
        setItems((item)=>item.map((i)=>(
            i.id==id ? {...i, active:!i.active} : i
        )))
    }

  return (
    <section id='faqs' className="bg-[#1C1817]">
  <div className="container px-6 lg:w-[70%] md:w-[80%] w-[98%] py-16 mx-auto">
    <h1 className="text-2xl text-center font-semibold text-gray-800 lg:text-3xl dark:text-white">FAQs</h1>
    <div className="mt-8 space-y-8 lg:mt-12">
    {items.map((item,index)=>{
 return (
      <div key={item.Question} className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800" style={{backdropFilter: 'blur(34px)',backgroundColor: 'rgba(255, 255, 255, .03)'}}>
        <button onClick={()=>Toggle(item.id)} className="flex items-center justify-between w-full">
          <h1 className="font-semibold text-gray-700 dark:text-white">{item.Question}</h1>
          {item.active ? (
          <span className="text-gray-400 bg-gray-200 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
            </svg>
          </span>
          ):(

          <span class="text-white bg-black rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </span>
          )}
        </button>
        {item.active && (
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
          {item.Ans}
        </p>
        )}
      </div>
      )
    })}
     
    </div>
  </div>
</section>
  )
}

export default Faqs