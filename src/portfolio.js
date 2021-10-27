const header = {

  homepage: '/',
  title: 'AG.',
}

const about = {
  name: 'Akhil Giri',
  role: 'Computer Sceince Engineer',
  description:
    'our levels of success willrarely exceed our level of personal development because success is something we attract by whom we become.',
  resume: 'https://drive.google.com/file/d/1fmD-SKmD2ACQ6IXq7_Jra85ZIKh7GqFO/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/akhilesh-goswami/',
    github: 'https://github.com/Akhilleshgoswami',
    leetcode:'',
    GFG:''
  },
}

const projects = [

  {
    name: 'Travel Advisor',
    description:
      ' This web app use Rapid API . It uses user current locationlongitude and latitude,google map api and shows you besthotels,visitor place and restaurants around you it is over personal guide while traveling.',
    stack: [' Rapid API', 'Google Map', 'React'],
    sourceCode: 'https://github.com/Akhilleshgoswami/Travaladvisor-',
    livePreview: 'https://pedantic-tereshkova-ea8989.netlify.app/',
  },
  {
    name: 'CryptoState',
    description:
      'This is a Blockchain-based project that solves many problems of the current Real state system and makes it more secure and makes buying and selling property easy.It is based on the concept of the Non-Fungible Token Marketplace and treat the property as NFT and Uses ERC721 Token to build its all functionality. Read Detiles of the project here.',
    stack: ['Metamask', 'React', 'Ethereum Blockchain',' Truffle', 'chai','openzeppelin','Ganache Cli'],
    sourceCode: 'https://github.com/Akhilleshgoswami/cryptovoys/tree/master/realstate_NFT',
    livePreview:  'https://www.linkedin.com/posts/akhilesh-goswami_work-property-change-activity-6857520529759444993-ROSL',
  },
  {
    name: 'Secure Scan',
    description:'This is a Web app that uses Blockchain Technology and it helps to prevent product frauds for all online product seller sites, it stores product hash that is generated by the SHA256 hash algorithm on the blockchain.it uses a Qr code reader and Qr code generator for reading and generating the QR code of SHA256 Hash.',
    
    

    stack: ['Metamask', 'React', 'Ethereum Blockchain',' Truffle', 'chai','openzeppelin','Ganache Cli'],
    sourceCode: 'https://github.com/Akhilleshgoswami/ScureScan.github.io',
    livePreview: 'https://www.linkedin.com/posts/akhilesh-goswami_blockchain-customerexperience-like-activity-6817458389078163457-Lpse/',
  },
]

const skills = [

  
  'C++',
  'DataStructure and Algorithim',
    'Blockchain',
  'Truffle',
  'Solidity',
  'HTML',
  'CSS',
  'JavaScript',
  'node',
  'mongoDb',
  'epxress',
  'postman',
  'React',
  'Redux',
  'Material UI',
  'Git',

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: '',
}

export { header, about, projects, skills, contact }
