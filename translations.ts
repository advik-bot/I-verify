export interface TranslationStrings {
  // Header
  languageSelectorLabel: string;
  switchToLightMode: string;
  switchToDarkMode: string;
  
  // Module Selector
  welcome: string;
  toolSelection: string;
  moduleMedicineTitle: string;
  moduleMedicineDescription: string;
  modulePlantTitle: string;
  modulePlantDescription: string;
  moduleSoilTitle: string;
  moduleSoilDescription: string;

  // Image Uploader
  changeTool: string;
  clearImage: string;
  imagePreview: string;
  uploadFromDevice: string;
  useCamera: string;
  verifying: string;
  verifyImage: string;
  
  // Results Display
  analysisFor: string;
  confidenceScore: string;
  observations: string;
  recommendations: string;
  warnings: string;
  startNewVerification: string;
  wateringScheduleTitle: string;
  nextWatering: string;
  waterAmount: string;
  wateringNotes: string;
  addToCalendar: string;
  calendarEventTitle: string;
  calendarEventDetails: string; // e.g., "Recommended amount: {amount}. Notes: {notes}"
  none: string;

  // Loading
  loading: string;
  loadingSubtitle: string;

  // Disclaimer
  disclaimerTitle: string;
  disclaimerText: string;

  // Camera View
  cameraError: string;
  close: string;
  capturedPreview: string;
  retake: string;
  confirmPhoto: string;
  switchCamera: string;
  takePicture: string;
  closeCamera: string;

  // Errors
  errorModuleImage: string;
  errorAIResponse: string;
  errorUnexpected: string;
  errorGemini: string;

  // Unclear Image Response
  unclearImage: string;
  unclearReasonDefault: string;
  unclearRecommendations: string;
  unclearWarning: string;
}

export const LANGUAGES: { [key: string]: string } = {
  en: 'English',
  hi: 'हिंदी', // Hindi
  ta: 'தமிழ்', // Tamil
  te: 'తెలుగు', // Telugu
  kn: 'ಕನ್ನಡ', // Kannada
  mr: 'मराठी', // Marathi
  bn: 'বাংলা', // Bengali
};

export const translations: { [key: string]: TranslationStrings } = {
  en: {
    languageSelectorLabel: 'Select Language',
    switchToLightMode: 'Switch to light mode',
    switchToDarkMode: 'Switch to dark mode',
    welcome: 'Welcome to I-Verify',
    toolSelection: 'Which AI tool would you like to use?',
    moduleMedicineTitle: 'Medicine Authenticity',
    moduleMedicineDescription: 'Check if a medicine strip or package appears authentic.',
    modulePlantTitle: 'Plant Disease Detection',
    modulePlantDescription: 'Identify potential diseases on your plants from a photo.',
    moduleSoilTitle: 'Soil Moisture Checker',
    moduleSoilDescription: 'Get AI advice on when to water your plants.',
    changeTool: 'Change Tool',
    clearImage: 'Clear image',
    imagePreview: 'Preview',
    uploadFromDevice: 'Upload from Device',
    useCamera: 'Use Camera',
    verifying: 'Verifying...',
    verifyImage: 'Verify Image',
    analysisFor: 'Analysis for',
    confidenceScore: 'Confidence Score',
    observations: 'What I Observed',
    recommendations: 'Recommendations',
    warnings: 'Warnings',
    startNewVerification: 'Start New Verification',
    loading: 'AI is analyzing your image...',
    loadingSubtitle: 'This may take a moment.',
    disclaimerTitle: 'Disclaimer',
    disclaimerText: 'I-Verify provides an AI-based visual analysis and is not a substitute for professional advice. Medicine results are not medical advice; always consult a healthcare professional. Plant and soil results are for guidance only. Decisions based on this app\'s output are at your own risk.',
    cameraError: 'Could not access the camera. Please check your browser permissions.',
    close: 'Close',
    capturedPreview: 'Captured preview',
    retake: 'Retake',
    confirmPhoto: 'Confirm Photo',
    switchCamera: 'Switch camera',
    takePicture: 'Take picture',
    closeCamera: 'Close camera',
    errorModuleImage: "Module and image must be selected.",
    errorAIResponse: "Failed to get a valid response from the AI. Please try again.",
    errorUnexpected: "An unexpected error occurred. Please try again.",
    errorGemini: "The AI model could not process the request. The image might be unsupported or an API error occurred.",
    unclearImage: "Image Unclear",
    unclearReasonDefault: "The AI could not process the image.",
    unclearRecommendations: "Please retake the photo with:\n- Better lighting\n- A closer, clearer view\n- The subject centered in the frame",
    unclearWarning: "Analysis could not be performed due to poor image quality.",
    wateringScheduleTitle: 'Watering Schedule',
    nextWatering: 'Next Watering',
    waterAmount: 'Water Amount',
    wateringNotes: 'Notes',
    addToCalendar: 'Add Reminder to Calendar',
    calendarEventTitle: 'Water Your Plant',
    calendarEventDetails: 'Time to water your plant.\nRecommended amount: {amount}\nNotes: {notes}',
    none: 'None'
  },
  hi: {
    languageSelectorLabel: 'भाषा चुनें',
    switchToLightMode: 'लाइट मोड पर स्विच करें',
    switchToDarkMode: 'डार्क मोड पर स्विच करें',
    welcome: 'आई-वेरीफाई में आपका स्वागत है',
    toolSelection: 'आप कौन सा एआई टूल इस्तेमाल करना चाहेंगे?',
    moduleMedicineTitle: 'दवा की प्रामाणिकता',
    moduleMedicineDescription: 'जांचें कि दवा की पट्टी या पैकेज असली है या नहीं।',
    modulePlantTitle: 'पौधों में रोग का पता लगाना',
    modulePlantDescription: 'एक तस्वीर से अपने पौधों पर संभावित बीमारियों की पहचान करें।',
    moduleSoilTitle: 'मिट्टी की नमी जांचकर्ता',
    moduleSoilDescription: 'अपने पौधों को कब पानी देना है, इस पर एआई सलाह प्राप्त करें।',
    changeTool: 'टूल बदलें',
    clearImage: 'छवि साफ़ करें',
    imagePreview: 'पूर्वावलोकन',
    uploadFromDevice: 'डिवाइस से अपलोड करें',
    useCamera: 'कैमरे का प्रयोग करें',
    verifying: 'सत्यापित हो रहा है...',
    verifyImage: 'छवि सत्यापित करें',
    analysisFor: 'के लिए विश्लेषण',
    confidenceScore: 'आत्मविश्वास स्कोर',
    observations: 'मैंने क्या देखा',
    recommendations: 'सिफारिशें',
    warnings: 'चेतावनी',
    startNewVerification: 'नया सत्यापन शुरू करें',
    loading: 'एआई आपकी छवि का विश्लेषण कर रहा है...',
    loadingSubtitle: 'इसमें कुछ समय लग सकता है।',
    disclaimerTitle: 'अस्वीकरण',
    disclaimerText: 'आई-वेरीफाई एआई-आधारित दृश्य विश्लेषण प्रदान करता है और यह पेशेवर सलाह का विकल्प नहीं है। दवा के परिणाम चिकित्सा सलाह नहीं हैं; हमेशा एक स्वास्थ्य देखभाल पेशेवर से परामर्श करें। पौधे और मिट्टी के परिणाम केवल मार्गदर्शन के लिए हैं। इस ऐप के आउटपुट के आधार पर निर्णय आपके अपने जोखिम पर हैं।',
    cameraError: 'कैमरे तक नहीं पहुंच सका। कृपया अपनी ब्राउज़र अनुमतियों की जांच करें।',
    close: 'बंद करें',
    capturedPreview: 'कैप्चर किया गया पूर्वावलोकन',
    retake: 'फिर से लें',
    confirmPhoto: 'फोटो की पुष्टि करें',
    switchCamera: 'कैमरा स्विच करें',
    takePicture: 'तस्वीर लें',
    closeCamera: 'कैमरा बंद करें',
    errorModuleImage: "मॉड्यूल और छवि का चयन किया जाना चाहिए।",
    errorAIResponse: "एआई से वैध प्रतिक्रिया प्राप्त करने में विफल। कृपया पुन: प्रयास करें।",
    errorUnexpected: "एक अप्रत्याशित त्रुटि हुई। कृपया पुन: प्रयास करें।",
    errorGemini: "एआई मॉडल अनुरोध को संसाधित नहीं कर सका। छवि असमर्थित हो सकती है या एपीआई त्रुटि हुई है।",
    unclearImage: "छवि अस्पष्ट",
    unclearReasonDefault: "एआई छवि को संसाधित नहीं कर सका।",
    unclearRecommendations: "कृपया फोटो फिर से लें:\n- बेहतर रोशनी\n- एक नज़दीकी, स्पष्ट दृश्य\n- विषय फ्रेम में केंद्रित हो",
    unclearWarning: "खराब छवि गुणवत्ता के कारण विश्लेषण नहीं किया जा सका।",
    wateringScheduleTitle: 'पानी देने का शेड्यूल',
    nextWatering: 'अगली सिंचाई',
    waterAmount: 'पानी की मात्रा',
    wateringNotes: 'टिप्पणियाँ',
    addToCalendar: 'कैलेंडर में रिमाइंडर जोड़ें',
    calendarEventTitle: 'अपने पौधे को पानी दें',
    calendarEventDetails: 'आपके पौधे को पानी देने का समय।\nअनुशंसित मात्रा: {amount}\nनोट्स: {notes}',
    none: 'कोई नहीं'
  },
  ta: {
    languageSelectorLabel: 'மொழியைத் தேர்ந்தெடுக்கவும்',
    switchToLightMode: 'ஒளி பயன்முறைக்கு மாறவும்',
    switchToDarkMode: 'இருண்ட பயன்முறைக்கு மாறவும்',
    welcome: 'ஐ-வெரிஃபைக்கு வரவேற்கிறோம்',
    toolSelection: 'நீங்கள் எந்த AI கருவியைப் பயன்படுத்த விரும்புகிறீர்கள்?',
    moduleMedicineTitle: 'மருந்து நம்பகத்தன்மை',
    moduleMedicineDescription: 'மருந்து ஸ்டிரிப் அல்லது பேக்கேஜ் உண்மையானதா என்று சரிபார்க்கவும்.',
    modulePlantTitle: 'தாவர நோய் கண்டறிதல்',
    modulePlantDescription: 'ஒரு புகைப்படத்திலிருந்து உங்கள் தாவரங்களில் உள்ள சாத்தியமான நோய்களை அடையாளம் காணவும்.',
    moduleSoilTitle: 'மண் ஈரப்பதம் சரிபார்ப்பு',
    moduleSoilDescription: 'உங்கள் தாவரங்களுக்கு எப்போது தண்ணீர் பாய்ச்ச வேண்டும் என்பது குறித்த AI ஆலோசனையைப் பெறுங்கள்.',
    changeTool: 'கருவியை மாற்று',
    clearImage: 'படத்தை அழிக்கவும்',
    imagePreview: 'முன்னோட்டம்',
    uploadFromDevice: 'சாதனத்திலிருந்து பதிவேற்றவும்',
    useCamera: 'கேமராவைப் பயன்படுத்தவும்',
    verifying: 'சரிபார்க்கிறது...',
    verifyImage: 'படத்தைச் சரிபார்க்கவும்',
    analysisFor: 'பகுப்பாய்வு',
    confidenceScore: 'நம்பிக்கை மதிப்பெண்',
    observations: 'நான் கவனித்தது',
    recommendations: 'பரிந்துரைகள்',
    warnings: 'எச்சரிக்கைகள்',
    startNewVerification: 'புதிய சரிபார்ப்பைத் தொடங்கவும்',
    loading: 'AI உங்கள் படத்தைப் பகுப்பாய்வு செய்கிறது...',
    loadingSubtitle: 'இதற்கு சிறிது நேரம் ஆகலாம்.',
    disclaimerTitle: 'பொறுப்புத் துறப்பு',
    disclaimerText: 'ஐ-வெரிஃபை AI-அடிப்படையிலான காட்சிப் பகுப்பாய்வை வழங்குகிறது மற்றும் இது தொழில்முறை ஆலோசனைக்கு மாற்றாகாது. மருந்து முடிவுகள் மருத்துவ ஆலோசனை அல்ல; எப்போதும் ஒரு சுகாதார நிபுணரை அணுகவும். ஆலை மற்றும் மண் முடிவுகள் வழிகாட்டுதலுக்காக மட்டுமே. இந்த பயன்பாட்டின் வெளியீட்டின் அடிப்படையிலான முடிவுகள் உங்கள் சொந்த ஆபத்தில் உள்ளன.',
    cameraError: 'கேமராவை அணுக முடியவில்லை. உங்கள் உலாவி அனுமதிகளைச் சரிபார்க்கவும்.',
    close: 'மூடு',
    capturedPreview: 'பிடிக்கப்பட்ட முன்னோட்டம்',
    retake: 'மீண்டும் எடுக்கவும்',
    confirmPhoto: 'புகைப்படத்தை உறுதிப்படுத்தவும்',
    switchCamera: 'கேமராவை மாற்றவும்',
    takePicture: 'படம் எடுக்கவும்',
    closeCamera: 'கேமராவை மூடு',
    errorModuleImage: "தொகுதி மற்றும் படம் தேர்ந்தெடுக்கப்பட வேண்டும்.",
    errorAIResponse: "AI இலிருந்து சரியான பதிலைப் பெற முடியவில்லை. மீண்டும் முயலவும்.",
    errorUnexpected: "எதிர்பாராத பிழை ஏற்பட்டது. மீண்டும் முயலவும்.",
    errorGemini: "AI மாதிரியால் கோரிக்கையைச் செயல்படுத்த முடியவில்லை. படம் ஆதரிக்கப்படாமல் இருக்கலாம் அல்லது API பிழை ஏற்பட்டிருக்கலாம்.",
    unclearImage: "படம் தெளிவாக இல்லை",
    unclearReasonDefault: "AI படத்தைச் செயல்படுத்த முடியவில்லை.",
    unclearRecommendations: "தயவுசெய்து மீண்டும் புகைப்படம் எடுக்கவும்:\n- சிறந்த வெளிச்சம்\n- ஒரு நெருக்கமான, தெளிவான பார்வை\n- பொருள் சட்டத்தின் மையத்தில் உள்ளது",
    unclearWarning: "மோசமான படத் தரம் காரணமாக பகுப்பாய்வு செய்ய முடியவில்லை.",
    wateringScheduleTitle: 'தண்ணீர் பாய்ச்சும் அட்டவணை',
    nextWatering: 'அடுத்த தண்ணீர் பாய்ச்சல்',
    waterAmount: 'நீரின் அளவு',
    wateringNotes: 'குறிப்புகள்',
    addToCalendar: 'நினைவூட்டலை காலெண்டரில் சேர்க்கவும்',
    calendarEventTitle: 'உங்கள் செடிக்கு தண்ணீர் பாய்ச்சவும்',
    calendarEventDetails: 'உங்கள் செடிக்கு தண்ணீர் பாய்ச்ச வேண்டிய நேரம்.\nபரிந்துரைக்கப்பட்ட அளவு: {amount}\nகுறிப்புகள்: {notes}',
    none: 'இல்லை'
  },
  te: {
    languageSelectorLabel: 'భాషను ఎంచుకోండి',
    switchToLightMode: 'లైట్ మోడ్‌కు మారండి',
    switchToDarkMode: 'డార్క్ మోడ్‌కు మారండి',
    welcome: 'ఐ-వెరిఫైకి స్వాగతం',
    toolSelection: 'మీరు ఏ AI సాధనాన్ని ఉపయోగించాలనుకుంటున్నారు?',
    moduleMedicineTitle: 'మందుల ప్రామాణికత',
    moduleMedicineDescription: 'మందుల స్ట్రిప్ లేదా ప్యాకేజీ అసలైనదా అని తనిఖీ చేయండి.',
    modulePlantTitle: 'మొక్కల వ్యాధి నిర్ధారణ',
    modulePlantDescription: 'ఒక ఫోటో నుండి మీ మొక్కలపై సంభావ్య వ్యాధులను గుర్తించండి.',
    moduleSoilTitle: 'నేల తేమ తనిఖీ',
    moduleSoilDescription: 'మీ మొక్కలకు ఎప్పుడు నీరు పెట్టాలో AI సలహా పొందండి.',
    changeTool: 'సాధనాన్ని మార్చండి',
    clearImage: 'చిత్రాన్ని క్లియర్ చేయండి',
    imagePreview: 'ముందుచూపు',
    uploadFromDevice: 'పరికరం నుండి అప్‌లోడ్ చేయండి',
    useCamera: 'కెమెరాను ఉపయోగించండి',
    verifying: 'ధృవీకరిస్తోంది...',
    verifyImage: 'చిత్రాన్ని ధృవీకరించండి',
    analysisFor: 'విశ్లేషణ',
    confidenceScore: 'విశ్వాస స్కోరు',
    observations: 'నేను గమనించినది',
    recommendations: 'సిఫార్సులు',
    warnings: 'హెచ్చరికలు',
    startNewVerification: 'కొత్త ధృవీకరణను ప్రారంభించండి',
    loading: 'AI మీ చిత్రాన్ని విశ్లేషిస్తోంది...',
    loadingSubtitle: 'దీనికి కొంత సమయం పట్టవచ్చు.',
    disclaimerTitle: 'నిరాకరణ',
    disclaimerText: 'ఐ-వెరిఫై AI-ఆధారిత దృశ్య విశ్లేషణను అందిస్తుంది మరియు ఇది వృత్తిపరమైన సలహాకు ప్రత్యామ్నాయం కాదు. మందుల ఫలితాలు వైద్య సలహా కాదు; ఎల్లప్పుడూ ఆరోగ్య సంరక్షణ నిపుణుడిని సంప్రదించండి. మొక్క మరియు నేల ఫలితాలు మార్గదర్శకత్వం కోసం మాత్రమే. ఈ అనువర్తనం యొక్క అవుట్‌పుట్ ఆధారంగా తీసుకున్న నిర్ణయాలు మీ స్వంత పూచీపై ఉంటాయి.',
    cameraError: 'కెమెరాను యాక్సెస్ చేయలేకపోయింది. దయచేసి మీ బ్రౌజర్ అనుమతులను తనిఖీ చేయండి.',
    close: 'మూసివేయండి',
    capturedPreview: 'పట్టుకున్న ప్రివ్యూ',
    retake: 'మళ్లీ తీయండి',
    confirmPhoto: 'ఫోటోను నిర్ధారించండి',
    switchCamera: 'కెమెరాను మార్చండి',
    takePicture: 'చిత్రాన్ని తీయండి',
    closeCamera: 'కెమెరాను మూసివేయండి',
    errorModuleImage: "మాడ్యూల్ మరియు చిత్రం తప్పనిసరిగా ఎంచుకోవాలి.",
    errorAIResponse: "AI నుండి చెల్లుబాటు అయ్యే ప్రతిస్పందనను పొందడంలో విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.",
    errorUnexpected: "ఒక ఊహించని లోపం సంభవించింది. దయచేసి మళ్లీ ప్రయత్నించండి.",
    errorGemini: "AI మోడల్ అభ్యర్థనను ప్రాసెస్ చేయలేకపోయింది. చిత్రం మద్దతు లేకపోవచ్చు లేదా API లోపం సంభవించి ఉండవచ్చు.",
    unclearImage: "చిత్రం అస్పష్టంగా ఉంది",
    unclearReasonDefault: "AI చిత్రాన్ని ప్రాసెస్ చేయలేకపోయింది.",
    unclearRecommendations: "దయచేసి ఫోటోను మళ్లీ తీయండి:\n- మంచి లైటింగ్\n- దగ్గరి, స్పష్టమైన వీక్షణ\n- విషయం ఫ్రేమ్‌లో కేంద్రీకృతమై ఉంది",
    unclearWarning: "చిత్ర నాణ్యత తక్కువగా ఉన్నందున విశ్లేషణ చేయలేము.",
    wateringScheduleTitle: 'నీటిపారుదల షెడ్యూల్',
    nextWatering: 'తదుపరి నీటిపారుదల',
    waterAmount: 'నీటి మొత్తం',
    wateringNotes: 'గమనికలు',
    addToCalendar: 'క్యాలెండర్‌కు రిమైండర్‌ను జోడించండి',
    calendarEventTitle: 'మీ మొక్కకు నీరు పెట్టండి',
    calendarEventDetails: 'మీ మొక్కకు నీరు పెట్టాల్సిన సమయం.\nసిఫార్సు చేయబడిన మొత్తం: {amount}\nగమనికలు: {notes}',
    none: 'ఏదీ లేదు'
  },
  kn: {
    languageSelectorLabel: 'ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    switchToLightMode: 'ಬೆಳಕಿನ ಮೋಡ್‌ಗೆ ಬದಲಿಸಿ',
    switchToDarkMode: 'ಡಾರ್ಕ್ ಮೋಡ್‌ಗೆ ಬದಲಿಸಿ',
    welcome: 'ಐ-ವೆರಿಫೈಗೆ ಸ್ವಾಗತ',
    toolSelection: 'ನೀವು ಯಾವ AI ಉಪಕರಣವನ್ನು ಬಳಸಲು ಬಯಸುತ್ತೀರಿ?',
    moduleMedicineTitle: 'ಔಷಧದ ದೃಢೀಕರಣ',
    moduleMedicineDescription: 'ಔಷಧದ ಸ್ಟ್ರಿಪ್ ಅಥವಾ ಪ್ಯಾಕೇಜ್ ಅಧಿಕೃತವಾಗಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ.',
    modulePlantTitle: 'ಸಸ್ಯ ರೋಗ ಪತ್ತೆ',
    modulePlantDescription: 'ಫೋಟೋದಿಂದ ನಿಮ್ಮ ಸಸ್ಯಗಳಲ್ಲಿ ಸಂಭವನೀಯ ರೋಗಗಳನ್ನು ಗುರುತಿಸಿ.',
    moduleSoilTitle: 'ಮಣ್ಣಿನ ತೇವಾಂಶ ಪರೀಕ್ಷಕ',
    moduleSoilDescription: 'ನಿಮ್ಮ ಸಸ್ಯಗಳಿಗೆ ಯಾವಾಗ ನೀರು ಹಾಕಬೇಕು ಎಂಬುದರ ಕುರಿತು AI ಸಲಹೆ ಪಡೆಯಿರಿ.',
    changeTool: 'ಉಪಕರಣವನ್ನು ಬದಲಾಯಿಸಿ',
    clearImage: 'ಚಿತ್ರವನ್ನು ತೆರವುಗೊಳಿಸಿ',
    imagePreview: 'ಮುನ್ನೋಟ',
    uploadFromDevice: 'ಸಾಧನದಿಂದ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
    useCamera: 'ಕ್ಯಾಮೆರಾ ಬಳಸಿ',
    verifying: 'ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ...',
    verifyImage: 'ಚಿತ್ರವನ್ನು ಪರಿಶೀಲಿಸಿ',
    analysisFor: 'ವಿಶ್ಲೇಷಣೆಗಾಗಿ',
    confidenceScore: 'ವಿಶ್ವಾಸಾರ್ಹ ಸ್ಕೋರ್',
    observations: 'ನಾನು ಗಮನಿಸಿದ್ದು',
    recommendations: 'ಶಿಫಾರಸುಗಳು',
    warnings: 'ಎಚ್ಚರಿಕೆಗಳು',
    startNewVerification: 'ಹೊಸ ಪರಿಶೀಲನೆ ಪ್ರಾರಂಭಿಸಿ',
    loading: 'AI ನಿಮ್ಮ ಚಿತ್ರವನ್ನು ವಿಶ್ಲೇಷಿಸುತ್ತಿದೆ...',
    loadingSubtitle: 'ಇದಕ್ಕೆ ಸ್ವಲ್ಪ ಸಮಯ ತೆಗೆದುಕೊಳ್ಳಬಹುದು.',
    disclaimerTitle: 'ಹಕ್ಕು ನಿರಾಕರಣೆ',
    disclaimerText: 'ಐ-ವೆರಿಫೈ AI-ಆಧಾರಿತ ದೃಶ್ಯ ವಿಶ್ಲೇಷಣೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ ಮತ್ತು ಇದು ವೃತ್ತಿಪರ ಸಲಹೆಗೆ ಬದಲಿಯಾಗಿಲ್ಲ. ಔಷಧದ ಫಲಿತಾಂಶಗಳು ವೈದ್ಯಕೀಯ ಸಲಹೆಯಲ್ಲ; ಯಾವಾಗಲೂ ಆರೋಗ್ಯ ವೃತ್ತಿಪರರನ್ನು ಸಂಪರ್ಕಿಸಿ. ಸಸ್ಯ ಮತ್ತು ಮಣ್ಣಿನ ಫಲಿತಾಂಶಗಳು ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಮಾತ್ರ. ಈ ಅಪ್ಲಿಕೇಶನ್‌ನ ಔಟ್‌ಪುಟ್ ಆಧರಿಸಿ ನಿರ್ಧಾರಗಳು ನಿಮ್ಮ ಸ್ವಂತ ಅಪಾಯದಲ್ಲಿರುತ್ತವೆ.',
    cameraError: 'ಕ್ಯಾಮೆರಾವನ್ನು ಪ್ರವೇಶಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ನಿಮ್ಮ ಬ್ರೌಸರ್ ಅನುಮತಿಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.',
    close: 'ಮುಚ್ಚಿ',
    capturedPreview: 'ಸೆರೆಹಿಡಿದ ಮುನ್ನೋಟ',
    retake: 'ಮತ್ತೆ ತೆಗೆದುಕೊಳ್ಳಿ',
    confirmPhoto: 'ಫೋಟೋವನ್ನು ಖಚಿತಪಡಿಸಿ',
    switchCamera: 'ಕ್ಯಾಮೆರಾ ಬದಲಾಯಿಸಿ',
    takePicture: 'ಚಿತ್ರ ತೆಗೆಯಿರಿ',
    closeCamera: 'ಕ್ಯಾಮೆರಾ ಮುಚ್ಚಿ',
    errorModuleImage: "ಮಾಡ್ಯೂಲ್ ಮತ್ತು ಚಿತ್ರವನ್ನು ಆಯ್ಕೆ ಮಾಡಬೇಕು.",
    errorAIResponse: "AI ನಿಂದ ಮಾನ್ಯವಾದ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ಪಡೆಯಲು ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
    errorUnexpected: "ಅನಿರೀಕ್ಷಿತ ದೋಷ ಸಂಭವಿಸಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
    errorGemini: "AI ಮಾದರಿಯು ವಿನಂತಿಯನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ಚಿತ್ರವು ಬೆಂಬಲಿತವಾಗಿಲ್ಲದಿರಬಹುದು ಅಥವಾ API ದೋಷ ಸಂಭವಿಸಿದೆ.",
    unclearImage: "ಚಿತ್ರ ಅಸ್ಪಷ್ಟವಾಗಿದೆ",
    unclearReasonDefault: "AI ಚಿತ್ರವನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.",
    unclearRecommendations: "ದಯವಿಟ್ಟು ಫೋಟೋವನ್ನು ಮತ್ತೆ ತೆಗೆದುಕೊಳ್ಳಿ:\n- ಉತ್ತಮ ಬೆಳಕು\n- ಹತ್ತಿರದ, ಸ್ಪಷ್ಟವಾದ ನೋಟ\n- ವಿಷಯವು ಫ್ರೇಮ್‌ನಲ್ಲಿ ಕೇಂದ್ರೀಕೃತವಾಗಿದೆ",
    unclearWarning: "ಕಳಪೆ ಚಿತ್ರದ ಗುಣಮಟ್ಟದಿಂದಾಗಿ ವಿಶ್ಲೇಷಣೆ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.",
    wateringScheduleTitle: 'ನೀರಿನ ವೇಳಾಪಟ್ಟಿ',
    nextWatering: 'ಮುಂದಿನ ನೀರುಹಾಕುವುದು',
    waterAmount: 'ನೀರಿನ ಪ್ರಮಾಣ',
    wateringNotes: 'ಟಿಪ್ಪಣಿಗಳು',
    addToCalendar: 'ಕ್ಯಾಲೆಂಡರ್‌ಗೆ ಜ್ಞಾಪನೆಯನ್ನು ಸೇರಿಸಿ',
    calendarEventTitle: 'ನಿಮ್ಮ ಗಿಡಕ್ಕೆ ನೀರು ಹಾಕಿ',
    calendarEventDetails: 'ನಿಮ್ಮ ಗಿಡಕ್ಕೆ ನೀರು ಹಾಕುವ ಸಮಯ.\nಶಿಫಾರಸು ಮಾಡಿದ ಪ್ರಮಾಣ: {amount}\nಟಿಪ್ಪಣಿಗಳು: {notes}',
    none: 'ಯಾವುದೂ ಇಲ್ಲ'
  },
  mr: {
    languageSelectorLabel: 'भाषा निवडा',
    switchToLightMode: 'लाइट मोडवर स्विच करा',
    switchToDarkMode: 'डार्क मोडवर स्विच करा',
    welcome: 'आय-व्हेरीफाय मध्ये आपले स्वागत आहे',
    toolSelection: 'तुम्ही कोणते AI साधन वापरू इच्छिता?',
    moduleMedicineTitle: 'औषधाची सत्यता',
    moduleMedicineDescription: 'औषधाची पट्टी किंवा पॅकेज अस्सल आहे की नाही ते तपासा.',
    modulePlantTitle: 'वनस्पती रोग शोधणे',
    modulePlantDescription: 'फोटोवरून तुमच्या वनस्पतींवरील संभाव्य रोग ओळखा.',
    moduleSoilTitle: 'मातीतील ओलावा तपासक',
    moduleSoilDescription: 'तुमच्या वनस्पतींना केव्हा पाणी द्यावे याबद्दल AI सल्ला मिळवा.',
    changeTool: 'साधन बदला',
    clearImage: 'प्रतिमा साफ करा',
    imagePreview: 'पूर्वावलोकन',
    uploadFromDevice: 'डिव्हाइसवरून अपलोड करा',
    useCamera: 'कॅमेरा वापरा',
    verifying: 'पडताळणी करत आहे...',
    verifyImage: 'प्रतिमा सत्यापित करा',
    analysisFor: 'साठी विश्लेषण',
    confidenceScore: 'आत्मविश्वास गुण',
    observations: 'मी काय पाहिले',
    recommendations: 'शिफारसी',
    warnings: 'चेतावणी',
    startNewVerification: 'नवीन पडताळणी सुरू करा',
    loading: 'AI तुमच्या प्रतिमेचे विश्लेषण करत आहे...',
    loadingSubtitle: 'याला थोडा वेळ लागू शकतो.',
    disclaimerTitle: 'अस्वीकरण',
    disclaimerText: 'आय-व्हेरीफाय AI-आधारित दृश्य विश्लेषण प्रदान करते आणि व्यावसायिक सल्ल्याचा पर्याय नाही. औषधांचे परिणाम वैद्यकीय सल्ला नाहीत; नेहमी आरोग्यसेवा व्यावसायिकांचा सल्ला घ्या. वनस्पती आणि मातीचे परिणाम केवळ मार्गदर्शनासाठी आहेत. या ॲपच्या आउटपुटवर आधारित निर्णय तुमच्या स्वतःच्या जोखमीवर आहेत.',
    cameraError: 'कॅमेरामध्ये प्रवेश करू शकलो नाही. कृपया तुमच्या ब्राउझर परवानग्या तपासा.',
    close: 'बंद करा',
    capturedPreview: 'कॅप्चर केलेले पूर्वावलोकन',
    retake: 'पुन्हा घ्या',
    confirmPhoto: 'फोटोची पुष्टी करा',
    switchCamera: 'कॅमेरा बदला',
    takePicture: 'चित्र घ्या',
    closeCamera: 'कॅमेरा बंद करा',
    errorModuleImage: "मॉड्यूल आणि प्रतिमा निवडणे आवश्यक आहे.",
    errorAIResponse: "AI कडून वैध प्रतिसाद मिळविण्यात अयशस्वी. कृपया पुन्हा प्रयत्न करा.",
    errorUnexpected: "एक अनपेक्षित त्रुटी आली. कृपया पुन्हा प्रयत्न करा.",
    errorGemini: "AI मॉडेल विनंतीवर प्रक्रिया करू शकले नाही. प्रतिमा समर्थित नसू शकते किंवा API त्रुटी आली आहे.",
    unclearImage: "प्रतिमा अस्पष्ट",
    unclearReasonDefault: "AI प्रतिमेवर प्रक्रिया करू शकले नाही.",
    unclearRecommendations: "कृपया फोटो पुन्हा घ्या:\n- चांगली प्रकाशयोजना\n- जवळचे, स्पष्ट दृश्य\n- विषय फ्रेममध्ये मध्यभागी आहे",
    unclearWarning: "खराब प्रतिमेच्या गुणवत्तेमुळे विश्लेषण करता आले नाही.",
    wateringScheduleTitle: 'पाणी देण्याचे वेळापत्रक',
    nextWatering: 'पुढील पाणी देणे',
    waterAmount: 'पाण्याची मात्रा',
    wateringNotes: 'टीप',
    addToCalendar: 'कॅलेंडरमध्ये रिमाइंडर జోడించండి',
    calendarEventTitle: 'तुमच्या रोपाला पाणी द्या',
    calendarEventDetails: 'तुमच्या रोपाला पाणी देण्याची वेळ.\nशिफारस केलेली मात्रा: {amount}\nटीप: {notes}',
    none: 'काहीही नाही'
  },
  bn: {
    languageSelectorLabel: 'ভাষা নির্বাচন করুন',
    switchToLightMode: 'লাইট মোডে স্যুইচ করুন',
    switchToDarkMode: 'ডার্ক মোডে স্যুইচ করুন',
    welcome: 'আই-ভেরিফাই-তে স্বাগতম',
    toolSelection: 'আপনি কোন এআই টুল ব্যবহার করতে চান?',
    moduleMedicineTitle: 'ওষুধের সত্যতা',
    moduleMedicineDescription: 'একটি ওষুধের স্ট্রিপ বা প্যাকেজ আসল কিনা তা পরীক্ষা করুন।',
    modulePlantTitle: 'উদ্ভিদ রোগ সনাক্তকরণ',
    modulePlantDescription: 'একটি ছবি থেকে আপনার উদ্ভিদের সম্ভাব্য রোগ সনাক্ত করুন।',
    moduleSoilTitle: 'মাটির আর্দ্রতা পরীক্ষক',
    moduleSoilDescription: 'আপনার গাছপালায় কখন জল দেবেন সে সম্পর্কে এআই পরামর্শ পান।',
    changeTool: 'টুল পরিবর্তন করুন',
    clearImage: 'ছবি সাফ করুন',
    imagePreview: 'পূর্বরূপ',
    uploadFromDevice: 'ডিভাইস থেকে আপলোড করুন',
    useCamera: 'ক্যামেরা ব্যবহার করুন',
    verifying: 'যাচাই করা হচ্ছে...',
    verifyImage: 'ছবি যাচাই করুন',
    analysisFor: 'এর জন্য বিশ্লেষণ',
    confidenceScore: 'আত্মবিশ্বাস স্কোর',
    observations: 'আমি যা পর্যবেক্ষণ করেছি',
    recommendations: 'সুপারিশ',
    warnings: 'সতর্কতা',
    startNewVerification: 'নতুন যাচাই শুরু করুন',
    loading: 'এআই আপনার ছবি বিশ্লেষণ করছে...',
    loadingSubtitle: 'এতে কিছুক্ষণ সময় লাগতে পারে।',
    disclaimerTitle: 'দাবিত্যাগ',
    disclaimerText: 'আই-ভেরিফাই এআই-ভিত্তিক ভিজ্যুয়াল বিশ্লেষণ প্রদান করে এবং এটি পেশাদার পরামর্শের বিকল্প নয়। ওষুধের ফলাফল চিকিৎসা পরামর্শ নয়; সর্বদা একজন স্বাস্থ্যসেবা পেশাদারের সাথে পরামর্শ করুন। উদ্ভিদ এবং মাটির ফলাফল শুধুমাত্র নির্দেশনার জন্য। এই অ্যাপের আউটপুটের উপর ভিত্তি করে সিদ্ধান্তগুলি আপনার নিজের ঝুঁকিতে রয়েছে।',
    cameraError: 'ক্যামেরা অ্যাক্সেস করা যায়নি। অনুগ্রহ করে আপনার ব্রাউজার অনুমতি পরীক্ষা করুন।',
    close: 'বন্ধ করুন',
    capturedPreview: 'ক্যাপচার করা প্রিভিউ',
    retake: 'পুনরায় নিন',
    confirmPhoto: 'ছবি নিশ্চিত করুন',
    switchCamera: 'ক্যামেরা পরিবর্তন করুন',
    takePicture: 'ছবি তুলুন',
    closeCamera: 'ক্যামেরা বন্ধ করুন',
    errorModuleImage: "মডিউল এবং ছবি অবশ্যই নির্বাচন করতে হবে।",
    errorAIResponse: "এআই থেকে একটি বৈধ প্রতিক্রিয়া পেতে ব্যর্থ। অনুগ্রহ করে আবার চেষ্টা করুন।",
    errorUnexpected: "একটি অপ্রত্যাশিত ত্রুটি ঘটেছে। অনুগ্রহ করে আবার চেষ্টা করুন।",
    errorGemini: "এআই মডেল অনুরোধটি প্রক্রিয়া করতে পারেনি। ছবিটি অসমর্থিত হতে পারে বা একটি এপিআই ত্রুটি ঘটেছে।",
    unclearImage: "ছবি অস্পষ্ট",
    unclearReasonDefault: "এআই ছবিটি প্রক্রিয়া করতে পারেনি।",
    unclearRecommendations: "অনুগ্রহ করে ছবিটি আবার তুলুন:\n- ভালো আলো\n- একটি কাছাকাছি, পরিষ্কার দৃশ্য\n- বিষয়টি ফ্রেমে কেন্দ্রীভূত",
    unclearWarning: "ছবির গুণমান খারাপ হওয়ায় বিশ্লেষণ করা যায়নি।",
    wateringScheduleTitle: 'জল দেওয়ার সময়সূচী',
    nextWatering: 'পরবর্তী জল দেওয়া',
    waterAmount: 'জলের পরিমাণ',
    wateringNotes: 'নোট',
    addToCalendar: 'ক্যালেন্ডারে অনুস্মারক যোগ করুন',
    calendarEventTitle: 'আপনার গাছে জল দিন',
    calendarEventDetails: 'আপনার গাছে জল দেওয়ার সময়।\nপ্রস্তাবিত পরিমাণ: {amount}\nনোট: {notes}',
    none: 'কিছুই না'
  }
};