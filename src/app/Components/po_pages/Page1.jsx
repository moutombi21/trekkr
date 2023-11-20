import React from 'react'

const Page1 = () => {
  return (
    <div className='container md:px-24 px-4 md:pt-14 mx-auto flex justify-center'>

<div className="container mx-auto py-8">
  <h1 className="text-3xl font-bold mb-4">Politique de Confidentialité</h1>
  <p>Date de la dernière mise à jour : 29 septembre 2023</p>
  <p>Nous sommes déterminés à protéger votre vie privée et vos données personnelles. Cette Politique de Confidentialité a été élaborée pour vous informer sur la manière dont nous collectons, utilisons, divulguons et protégeons vos informations. En utilisant notre application, vous acceptez les termes de cette Politique de Confidentialité.</p>
  <h2 className="text-2xl font-bold mt-6">1. Collecte de données</h2>
  <div className="mt-4">
    <h3 className="text-xl font-semibold">1.1. Données Personnelles</h3>
    <p>Nous pouvons collecter les types de données personnelles suivants lorsque vous utilisez notre application :</p>
    <ul className="list-disc pl-4">
      <li>
        <strong>Informations de compte</strong>
        <ul className="list-disc pl-4">
          <li>Nom complet</li>
          <li>Adresse e-mail</li>
          <li>Photo de profil (si vous choisissez de la télécharger)</li>
        </ul>
      </li>
      <li><strong>Données de localisation</strong>: Lorsque vous utilisez les fonctionnalités de suivi de votre randonnée, nous pouvons collecter des informations de localisation précises. Vous pouvez désactiver la géolocalisation à tout moment via les paramètres de votre appareil.</li>
      <li><strong>Informations sur l&lsquo;appareil</strong>: Nous collectons des informations sur l&lsquo;appareil que vous utilisez pour accéder à notre application, notamment le modèle de l&lsquo;appareil, le système d&lsquo;exploitation et l&lsquo;identifiant de l&lsquo;appareil.</li>
      <li><strong>Historique de l&lsquo;utilisation de l&lsquo;application</strong>: Nous pouvons collecter des informations sur la façon dont vous utilisez notre application, notamment les itinéraires de randonnée enregistrés et les statistiques d&lsquo;activité.</li>
    </ul>
  </div>
  <h2 className="text-2xl font-bold mt-6">2. Utilisation des données</h2>
  <div className="mt-4">
    <p>Nous utilisons vos données personnelles pour les finalités suivantes :</p>
    <ul className="list-disc pl-4">
      <li><strong>Gestion de votre compte</strong>: Nous utilisons vos informations de compte pour créer et gérer votre profil utilisateur afin de personnaliser votre expérience sur l&lsquo;application.</li>
      <li><strong>Enregistrement et suivi de vos randonnées</strong>: Les données de localisation sont utilisées pour enregistrer et suivre vos randonnées en temps réel et pour générer des statistiques d&lsquo;activité.</li>
      <li><strong>Amélioration de nos services</strong>: Les données agrégées, y compris les statistiques d&lsquo;utilisation, sont utilisées pour améliorer l&lsquo;application et développer de nouvelles fonctionnalités.</li>
      <li><strong>Notifications et mises à jour</strong>: Si vous avez donné votre consentement, nous pouvons vous envoyer des notifications et des mises à jour liées à l&lsquo;application.</li>
    </ul>
  </div>
  <h2 className="text-2xl font-bold mt-6">3. Partage des données</h2>
  <div className="mt-4">
    <p>Nous ne partageons pas vos données personnelles avec des tiers sans votre consentement, sauf dans les cas suivants :</p>
    <ul className="list-disc pl-4">
      <li><strong>Partenaires de confiance</strong>: Nous pouvons partager vos données personnelles avec des partenaires de confiance pour fournir des services liés à l&lsquo;application.</li>
      <li><strong>Conformité légale</strong>: Nous pouvons divulguer vos données personnelles si cela est requis par la loi ou pour protéger nos droits et notre sécurité.</li>
    </ul>
  </div>
  {/* ... (Sections 4, 5, 6, 7 with content) ... */}
  <h2 className="text-2xl font-bold mt-6">4. Sécurité des données</h2>
  <div className="mt-4">
    <p>Nous prenons des mesures raisonnables pour protéger vos données personnelles contre la perte, l&lsquo;accès non autorisé, la divulgation, l&lsquo;altération ou la destruction.</p>
    <p>Cependant, il est important de noter qu&apos;aucune méthode de transmission sur Internet ou de stockage électronique n&apos;est totalement sécurisée.</p>
  </div>
  <h2 className="text-2xl font-bold mt-6">5. Vos droits</h2>
  <div className="mt-4">
    <p>Vous avez des droits concernant vos données personnelles :</p>
    <ul className="list-disc pl-4">
      <li><strong>Droit d&lsquo;accès</strong>: Vous avez le droit d&lsquo;accéder à vos données personnelles que nous détenons.</li>
      <li><strong>Droit de rectification</strong>: Si vos données personnelles sont inexactes ou incomplètes, vous avez le droit de les faire rectifier.</li>
      <li><strong>Droit à l&lsquo;effacement</strong>: Vous avez le droit de demander la suppression de vos données personnelles, sous réserve des obligations légales.</li>
      <li><strong>Droit d&lsquo;opposition</strong>: Vous pouvez vous opposer au traitement de vos données personnelles à des fins de marketing direct.</li>
    </ul>
    <p>Pour exercer ces droits ou poser des questions sur vos données personnelles, veuillez nous contacter à l&lsquo;adresse électronique indiquée ci-dessous.</p>
  </div>
  <h2 className="text-2xl font-bold mt-6">6. Modifications de la Politique de Confidentialité</h2>
  <div className="mt-4">
    <p>Nous pouvons mettre à jour cette Politique de Confidentialité de temps à autre pour refléter les changements dans nos pratiques de collecte et d&lsquo;utilisation de données. Les modifications seront effectives dès leur publication sur l&lsquo;application. Nous vous encourageons à consulter régulièrement cette Politique de Confidentialité pour rester informé(e) de nos pratiques.</p>
  </div>
  <div>
  <h2 className="text-2xl font-bold mt-6">7. Nous Contacter</h2>
  <div className="mt-4">
    <p>Si vous avez des questions, des commentaires ou des préoccupations concernant cette Politique de Confidentialité ou notre utilisation de vos données personnelles, veuillez nous contacter à l&lsquo;adresse électronique suivante :</p>
    <p className="mb-4">support@trekkr.eu</p>
  </div>
  <p className="mt-4">TREKKR GROUP SRL<br />Rue du Spignat 75<br />B-6030 Charleroi</p>
  <p className="mt-4">Date de la dernière mise à jour : 29 septembre 2023</p>
</div>


</div>
</div>

  )
}

export default Page1