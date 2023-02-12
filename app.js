const questionDisplay = document.querySelector("#questions");
const answerDisplay = document.querySelector("#answer");

const questions = [
  {
    id: 0,
    text: "What is the capital of France?",
    answer: [
      {
        text: "Paris",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Eiffelturm_und_Marsfeld2.jpg/1200px-Eiffelturm_und_Marsfeld2.jpg",
        alt: "Eiffel Tower",
        credit:
          "https://commons.wikimedia.org/wiki/File:Eiffelturm_und_Marsfeld2.jpg",
      },
      {
        text: "London",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Big_Ben_and_Parliament_Square_%28cropped%29.jpg/800px-Big_Ben_and_Parliament_Square_%28cropped%29.jpg",
        alt: "Big Ben and Parliament Square",
        credit:
          "https://commons.wikimedia.org/wiki/File:Big_Ben_and_Parliament_Square_(cropped).jpg",
      },
      {
        text: "Rome",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Rome_Vatican_St_Peter_Basilica_Facade.jpg/1024px-Rome_Vatican_St_Peter_Basilica_Facade.jpg",
        alt: "St. Peter's Basilica, Vatican City",
        credit:
          "https://commons.wikimedia.org/wiki/File:Rome_Vatican_St_Peter_Basilica_Facade.jpg",
      },
      {
        text: "New York City",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Central_Park_%28New_York_City%29.jpg/1200px-Central_Park_%28New_York_City%29.jpg",
        alt: "Central Park, New York City",
        credit:
          "https://commons.wikimedia.org/wiki/File:Central_Park_(New_York_City).jpg",
      },
    ],
  },
  {
    id: 1,
    text: "What is the currency used in Japan?",
    answer: [
      {
        text: "Japanese Yen",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/10000_yen_banknote.jpg/1024px-10000_yen_banknote.jpg",
        alt: "10000 Japanese Yen banknote",
        credit:
          "https://commons.wikimedia.org/wiki/File:10000_yen_banknote.jpg",
      },
      {
        text: "US Dollar",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/US_100_dollar_note-obverse.jpg/1024px-US_100_dollar_note-obverse.jpg",
        alt: "100 US Dollar banknote",
        credit:
          "https://commons.wikimedia.org/wiki/File:US_100_dollar_note-obverse.jpg",
      },
      {
        text: "Euro",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Euro_banknote_front_series_2002.jpg/1024px-Euro_banknote_front_series_2002.jpg",
        alt: "Euro banknote",
        credit:
          "https://commons.wikimedia.org/wiki/File:Euro_banknote_front_series_2002.jpg",
      },
      {
        text: "British Pound",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Pound_sterling_note%2C_obverse.jpg/1024px-Pound_sterling_note%2C_obverse.jpg",
        alt: "British Pound banknote",
        credit:
          "https://commons.wikimedia.org/wiki/File:Pound_sterling_note,_obverse.jpg",
      },
    ],
  },
  {
    id: 3,
    text: "What is the tallest mountain in the world?",
    answer: [
      {
        text: "Mount Everest",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg/1024px-Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg",
        alt: "Mount Everest",
        credit:
          "https://commons.wikimedia.org/wiki/File:Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg",
      },
      {
        text: "K2",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/K2_and_Chogori_snowy_mountains.jpg/1024px-K2_and_Chogori_snowy_mountains.jpg",
        alt: "K2 Mountain",
        credit:
          "https://commons.wikimedia.org/wiki/File:K2_and_Chogori_snowy_mountains.jpg",
      },
      {
        text: "Kangchenjunga",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Kangchenjunga_%28main_peak%29_from_Sandakphu.jpg/1024px-Kangchenjunga_%28main_peak%29_from_Sandakphu.jpg",
        alt: "Kangchenjunga Mountain",
        credit:
          "https://commons.wikimedia.org/wiki/File:Kangchenjunga_(main_peak)_from_Sandakphu.jpg",
      },
      {
        text: "Lhotse",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Lhotse_south_face_2006.jpg/1024px-Lhotse_south_face_2006.jpg",
        alt: "Lhotse Mountain",
        credit:
          "https://commons.wikimedia.org/wiki/File:Lhotse_south_face_2006.jpg",
      },
    ],
  },
];

const populateQuestions = () => {
  questions.forEach(question => {
    const titleBlock = document.createElement("div");
    titleBlock.id = `question-${question.id}`;
    titleBlock.classList.add("title-block");
    questionDisplay.appendChild(titleBlock);
  });
};

populateQuestions();
