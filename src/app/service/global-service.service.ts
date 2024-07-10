import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  open: boolean = false;
  langMode = "en";
  isGerman = false;

  private translations: { [key: string]: { [lang: string]: string } } = {
    'Header_me': {
      'en': 'About me',
      'de': 'Über mich'
    },
    'Header_contact': {
      'en': 'Contact',
      'de': 'Kontakt'
    },
    'me-txt': {
      'en': 'Hi, I am a Front-end deverloper based in Frankfurt, Germany and I developed an interest in programming through entry level courses in university. Gradually, I realised my passion when working on front-end projects during the training at the Developer Academy. <br> <br> While I continued polishing my skills with established web-dev technologies I slowly built up my portfolio that is showcased here. Please have a look!',
      'de': 'Hi, ich bin ein Frontend-Entwickler aus Frankfurt, und ich habe mein Interesse am Programmieren durch Einstiegs-Kurse an der Universität entdeckt. Allmählich erkannte ich mein starkes Interesse für den Bereich, als ich während der Ausbildung an der Developer Academy an zahlreichen Frontend-Projekten arbeitete. <br> <br> Während ich meine Fähigkeiten mit etablierten Webentwicklungstechnologien weiter verfeinerte, baute ich langsam mein Portfolio auf, das hier präsentiert wird. Bitte werfen Sie einen Blick darauf!'
    },
    'point1': {
      'en': 'One of the favourite things I love about working as a front-end developer is that you can develop your own ideas, limited only by your own imaginations and then implement those ideas in reality through code while getting instant visual feedback on your work and the value that you have created.',
      'de': 'Eines meiner Lieblingspunkte an der Arbeit als Frontend-Entwickler ist, dass man seine eigenen Ideen entwickeln kann, die nur durch die eigene Vorstellungskraft begrenzt sind, und diese Ideen dann durch Code in die Realität umsetzen kann, wobei man sofort visuelles Feedback zu seiner Arbeit und dem geschaffenen Wert erhält.'
    },
    'point2': {
      'en': 'To me, time passes by really quickly while I code and every problem I solve feels like another puzzle piece that finds itself in its rightful place. Typically, the satisfaction when solving a puzzle is the greatest when the problem has been especially tricky to handle.',
      'de': 'Für mich vergeht die Zeit sehr schnell, während ich code, und jedes gelöste Problem fühlt sich an wie ein weiteres Puzzleteil, das seinen richtigen Platz findet. Typischerweise ist die Zufriedenheit beim Lösen eines Puzzles am größten, wenn das Problem besonders knifflig war.'
    },
    'skill-txt': {
      'en': 'I have gained experience in building projects with various frontend technologies and concepts.',
      'de': 'Ich habe Erfahrungen erlangt beim entwickeln verschiedener Projekte mit Hilfe von vielen etablierten Front-End Technologien und Konzepten.'
    },
    'port-txt': {
      'en': 'Explore a selection of my work here - Interact with projects to see my skills in action.',
      'de': 'Entdecken Sie ein Teil meiner Arbeit hier - Interagieren Sie mit den Projekten um meine Fähigkeiten in Aktion zu sehen.'
    },
    // 'join': {
    //   'en': 'This is a great place to learn more about our services.',
    //   'de': 'Dies ist ein großartiger Ort, um mehr über unsere Dienstleistungen zu erfahren.'
    // },
    // 'elp': {
    //   'en': 'This is a great place to learn more about our services.',
    //   'de': 'Dies ist ein großartiger Ort, um mehr über unsere Dienstleistungen zu erfahren.'
    // },
    'problem': {
      'en': 'Got a problem to solve?',
      'de': 'Haben Sie ein Problem das gelöst werden muss?'
    },
    'kontaktieren': {
      'en': `Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work. 
            <br>
            <br>
            Need a Frontend developer? <strong>Contact me!</strong>`,
      'de': `Kontaktieren Sie mich über dieses Formular, gerne komme ich auf Sie zu, um über eine mögliche gemeinsame Arbeit zu reden. 
            <br>
            <br>
             Brauche Sie einen Front-End Developer? <strong style="background-color: transparent;">Kontaktieren Sie mich!</strong>`
    },
    'imprint': {
      'en': `Imprint`,
      'de': `Impressum`
    },
    'privacy': {
      'en': `I've read the <a href="privacy" style="color: rgb(75, 71, 255); text-decoration: none; background-color: transparent;">privacy policy</a> and agree to the processing of my data as outlined.`,
      'de': `Ich habe die <a href="privacy" style="color: rgb(75, 71, 255); text-decoration: none; background-color: transparent;">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.`
    },
    'name': {
      'en': `Your name.`,
      'de': `Ihr Name.`
    },
    'talk': {
      'en': `Let's talk!`,
      'de': `Kommen Sie auf mich zu`
    },
    'kont': {
      'en': `Get in touch`,
      'de': `Kontaktieren Sie mich`
    },
    'message': {
      'en': `Send message :)`,
      'de': `Nachricht versenden :)`
    },
    // 'i': {
    //   'en': `I am`,
    //   'de': `Ich bin`
    // },
  };

  translateElement(element: HTMLElement, lang: string): void {
    const translationKey = element.getAttribute('data-translate-key');
    let placeholder = element.getAttribute('placeholder')
    let value = element.getAttribute('value')
   
    if(translationKey && this.translations[translationKey]) {
      element.innerHTML = this.translations[translationKey][lang];
    }
  }

  translatePage(lang: string): void {
    const elements = document.querySelectorAll('[data-translate-key]');
    elements.forEach(element => this.translateElement(element as HTMLElement, lang));
    this.langMode = lang;
    if(lang == "de"){
      this.isGerman = true;
    }
    else{
      this.isGerman = false;
    }
  }

  constructor() { }


}
