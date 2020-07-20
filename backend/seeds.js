const mongoose = require('mongoose')
const User = require('./models/user')
const Apartment = require('./models/apartmentModel')
const ApartmentConfigModel = require('./models/apartmentConfigModel')
const HouseConfigModel = require('./models/houseConfigModel')
const LandConfigModel = require('./models/landConfigModel')
const OfficeConfigModel = require('./models/officeConfigModel')
const ComercialSpaceConfigModel = require('./models/comercialSpaceConfigModel')
const IndustrialSpaceConfig = require('./models/industrialSpaceConfigModel')

const dbURI = 'mongodb://localhost/just-imobiliare-db'

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (error, db) => {
    if (error) {
      return console.log(error)
    }
    console.log('Successfully connected to mongo!')
    db.dropDatabase()
      .then(() => {
        return User.create([
          {
            name: 'Marius',
            email: 'marius@yahoo.com',
            password: 'marius',
            passwordConfirmation: 'marius'
          }
        ])
      })
      .then(() => {
        return Apartment.create([{
          transactionType: 'Inchiriere',
          propertyType: 'Apartament'
        }
        ])
      })
      .then(() => {
        return ApartmentConfigModel.create([{
          apartmentType: ['Apartament', 'Garsoniera', 'Penthouse', 'Duplex', 'Triplex'],
          compartments: ['Decomandat', 'Semidecomandat', 'Nedecomandat', 'Circular', 'Vagon'],
          facingDirection: ['Nord', 'Nord-Est', 'Est', 'Sud-Est', 'Sud', 'Sud-Vest', 'Vest', 'Nord-Vest', 'Nord-Sud', 'Est-Vest'],
          floor: ['Demisol', 'Parter', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', 'Mansarda', 'Ultimele 2 etaje'],
          comfortType: ['1', '2', '3', 'Lux'],
          interiorState: ['Ultrafinisat', 'Finisat modern', 'Semifinisat', 'Finisat clasic', 'Buna', 'Nou', 'Renovat', 'Necesita renovare'],
          buildingType: ['Bloc de apartamente', 'Casa/Vila', 'Bloc de garsoniere', 'Bloc mixt'],
          constructionStage: ['Finalizata', 'Finisat', 'Semifinisat', 'In constructie', 'La gri', 'La rosu', 'Necesita renovare', 'De demolat', 'Structura', 'Proiect'],
          constructionType: ['Beton', 'Caramida', 'BCA', 'Lemn', 'Metal', 'Altele', 'Cadre', 'Placi', 'Monolit'],
          seismicRisk: ['Urgenta', 'Risc I', 'Risc II', 'Risc III'],
          // Features are the same for each property
          features: ['Aer conditionat', 'Aeroterme', 'Aragaz', 'Bideu', 'Cabina de dus', 'Cada', 'Dressing', 'Dus exterior', 'Frigider', 'Hota', 'Jacuzzi', 'Masina de splat rufe', 'Masina de spalat vase', 'Scara interioara', 'Semineu', 'Sistem de alarma', 'TV'],
          characteristics: ['Acces persoane cu dizabilitati', 'Acoperis', 'Camera de aburi', 'Fitness', 'Interfon', 'Parcare bicicleta', 'Paza', 'Paza permanenta', 'Piscina comunala', 'Piscina exterioara', 'Piscina interioara', 'Piscina privata', 'Senzor de fum', 'Spa', 'Spalatorie', 'Spatii agrement', 'Supraveghere video', 'Telecomanda poarta acces auto', 'Telecomanda poarta garaj', 'Uscatorie', 'Videointerfon', 'Wireless'],
          doorEntry: ['Lemn', 'Metal', 'Pal', 'PVC'],
          interiorDoors: ['Celulare', 'Lemn', 'MDF', 'Panel', 'PVC', 'Sticla'],
          walls: ['Faianta', 'Huma', 'Lambriu', 'Piatra naturala', 'Tapet', 'Var', 'Vinarom', 'Vopsea lavabila'],
          floorType: ['Dusumea', 'Granit', 'Gresie', 'Linoleum', 'Marmura', 'Mocheta', 'Parchet', 'Parchet laminat', 'Piatra naturala', 'Sapa'],
          furnished: ['Complet', 'Lux', 'Mobilat', 'Partial'],
          streetFacilities: ['Asfalt', 'Beton', 'De pamant', 'Iluminat strada', 'Mijloace de transport in comun', 'Neamenajate', 'Pietruite'],
          kitchenType: ['Chicineta', 'Deschisa', 'Mobilata', 'Partial mobilata', 'Partial utilata', 'Utilata'],
          otherSpaces: ['Boxa la subsol', 'Curte', 'Curte comuna', 'Debara', 'Facilitati', 'Gradina', 'Irigatii', 'Lift', 'Loc de joaca copii', 'Magazie', 'Pivnita', 'Sauna', 'WC serviciu', 'Zona pentru barbeque'],
          parking: ['Garaj', 'Garaj subteran', 'Parcare subterana', 'Parcare acoperita', 'Parcare deschisa'],
          windows: ['Aluminiu', 'Ferestre care se deschid', 'Geamuri cu izolatie fonica', 'Geamuri cu protectie UV', 'Geamuri termopan', 'Geamuri tripan', 'Lemn', 'PVC'],
          generalUtilities: ['Apa', 'Canalizare', 'CATV', 'Curent trifazic (380V)', 'Fosa septica', 'Gaz', 'Internet', 'Panouri solare', 'Telefon'],
          heatingSystem: ['Calorifere', 'Centrala cu lemne', 'Centrala cu peleti', 'Centrala imobil', 'Centrala proprie', 'Incalzire diesel', 'Incalzire prin pardoseala', 'Pompa de caldura', 'Soba/Teracota', 'Termoficare', 'Ventiloconvectoare'],
          insulation: ['Interior', 'Exterior'],
          meters: ['Apometre', 'Contor caldura', 'Contor electric', 'Contor gaz'],
          view: ['Vedere panoramica', 'Vedere spre lac', 'Vedere spre munte', 'Vedere spre oras'],
          realEstateFacilities: ['Acces pentru persoane cu dizabilitati', 'Acoperis', 'Camera de aburi', 'Fitness', 'Interfon', 'Parcare biciclete', 'Paza', 'Paza permanenta', 'Piscina comunala', 'Piscina exterioara', 'Piscina interioara', 'Piscina privata', 'Senzor de fum', 'Spa', 'Spalatorie', 'Spatii agrement', 'Supraveghere video', 'Telecomanda poarta acces auto', 'Telecomanda poarta garaj', 'Uscatorie', 'Videointerfon', 'Wireless']


        }
        ])
      })
      .then(() => {
        return HouseConfigModel.create([{
          useFor: ['Birouri', 'Residential', 'Comercial', 'Scoala/Gradinita', 'Restaurant/Cafenea'],
          houseType: ['Individuala', 'Vila', 'Duplex', 'Triplex', 'Casa insiruita'],
          interiorState: ['Ultrafinisat', 'Finisat modern', 'Semifinisat', 'Finisat clasic', 'Nou', 'Renovat', 'Necesita renovare'],
          roof: ['Tabla', 'Tigla', 'Sindrila', 'Terasa'],
          constructionStage: ['Finalizata', 'Finisat', 'Semifinisat', 'In constructie', 'La gri', 'La rosu', 'Necesita renovare', 'De demolat', 'Structura', 'Proiect'],
          constructionType: ['Beton', 'Caramida', 'BCA', 'Lemn', 'Metal', 'Altele', 'Cadre', 'Placi', 'Monolit'],
          seismicRisk: ['Urgenta', 'Risc', 'Risc I', 'Risc II', 'Risc III'],
          // Features are the same for apartment and house
          features: ['Aer conditionat', 'Aeroterme', 'Aragaz', 'Bideu', 'Cabina de dus', 'Cada', 'Dressing', 'Dus exterior', 'Frigider', 'Hota', 'Jacuzzi', 'Masina de splat rufe', 'Masina de spalat vase', 'Scara interioara', 'Semineu', 'Sistem de alarma', 'TV'],
          characteristics: ['Acces persoane cu dizabilitati', 'Acoperis', 'Camera de aburi', 'Fitness', 'Interfon', 'Parcare bicicleta', 'Paza', 'Paza permanenta', 'Piscina comunala', 'Piscina exterioara', 'Piscina interioara', 'Piscina privata', 'Senzor de fum', 'Spa', 'Spalatorie', 'Spatii agrement', 'Supraveghere video', 'Telecomanda poarta acces auto', 'Telecomanda poarta garaj', 'Uscatorie', 'Videointerfon', 'Wireless'],
          doorEntry: ['Lemn', 'Metal', 'Pal', 'PVC'],
          interiorDoors: ['Celulare', 'Lemn', 'MDF', 'Panel', 'PVC', 'Sticla'],
          walls: ['Faianta', 'Huma', 'Lambriu', 'Piatra naturala', 'Tapet', 'Var', 'Vinarom', 'Vopsea lavabila'],
          floorType: ['Dusumea', 'Granit', 'Gresie', 'Linoleum', 'Marmura', 'Mocheta', 'Parchet', 'Parchet laminat', 'Piatra naturala', 'Sapa'],
          furnished: ['Complet', 'Lux', 'Mobilat', 'Partial'],
          streetFacilities: ['Asfalt', 'Beton', 'De pamant', 'Iluminat strada', 'Mijloace de transport in comun', 'Neamenajate', 'Pietruite'],
          kitchenType: ['Chicineta', 'Deschisa', 'Mobilata', 'Partial mobilata', 'Partial utilata', 'Utilata'],
          otherSpaces: ['Boxa la subsol', 'Curte', 'Curte comuna', 'Debara', 'Facilitati', 'Gradina', 'Irigatii', 'Lift', 'Loc de joaca copii', 'Magazie', 'Pivnita', 'Sauna', 'WC serviciu', 'Zona pentru barbeque'],
          parking: ['Garaj', 'Garaj subteran', 'Parcare subterana', 'Parcare acoperita', 'Parcare deschisa'],
          windows: ['Aluminiu', 'Ferestre care se deschid', 'Geamuri cu izolatie fonica', 'Geamuri cu protectie UV', 'Geamuri termopan', 'Geamuri tripan', 'Lemn', 'PVC'],
          generalUtilities: ['Apa', 'Canalizare', 'CATV', 'Curent trifazic (380V)', 'Fosa septica', 'Gaz', 'Internet', 'Panouri solare', 'Telefon'],
          heatingSystem: ['Calorifere', 'Centrala cu lemne', 'Centrala cu peleti', 'Centrala imobil', 'Centrala proprie', 'Incalzire diesel', 'Incalzire prin pardoseala', 'Pompa de caldura', 'Soba/Teracota', 'Termoficare', 'Ventiloconvectoare'],
          insulation: ['Interior', 'Exterior'],
          meters: ['Apometre', 'Contor caldura', 'Contor electric', 'Contor gaz'],
          view: ['Vedere panoramica', 'Vedere spre lac', 'Vedere spre munte', 'Vedere spre oras'],
          realEstateFacilities: ['Acces pentru persoane cu dizabilitati', 'Acoperis', 'Camera de aburi', 'Fitness', 'Interfon', 'Parcare biciclete', 'Paza', 'Paza permanenta', 'Piscina comunala', 'Piscina exterioara', 'Piscina interioara', 'Piscina privata', 'Senzor de fum', 'Spa', 'Spalatorie', 'Spatii agrement', 'Supraveghere video', 'Telecomanda poarta acces auto', 'Telecomanda poarta garaj', 'Uscatorie', 'Videointerfon', 'Wireless']

        }])
      })
      .then(() => {
        return LandConfigModel.create([{
          accessFrom: ['Sosea', 'Drum principal', 'DN', 'Autostrada', 'Sosea de centura', 'Lac', 'Padure', 'Drum de servitute'],
          landType: ['Constructii', 'Agricol', 'Padure'],
          areaUnit: ['mp', 'ha'],
          classification: ['Intravilan', 'Extravilan'],
          useFor: ['Rezidential', 'Comercial', 'Scoala/Gradinita', 'Restaurant/Cafenea', 'benzinarie', 'Retail', 'Spalatorie auto', 'Industrial', 'Agricol', 'De vacanta', 'Spital/Clinica', 'Hotel/Pensiune'],
          additionalFeatures: ['Acces auto', 'Constructie demolabila', 'La sosea', 'Oportunitate de investitii', 'Parcelabil', 'Studiu Geo', 'Teren imprejmuit'],
          landUtilities: ['Apa', 'Canalizare', 'Curent', 'Gaz', 'irigatii', 'Utilitati in zona'],
          streetfacilities: ['Asfaltate', 'Betonate', 'De pamant', 'Iluminat stradal', 'Mijloace de transport in comun', 'Neamenajate', 'Pietruite'],
          view: ['Vedere panoramica', 'Vedere spre lac', 'Vedere spre munte', 'Vedere spre oras'],
          parking: ['Garaj', 'Garaj subteran', 'Parcare acoperita', 'Parcare deschisa']
        }])
      })
      .then(() => {
        return OfficeConfigModel.create([{
          officeType: ['A', 'B', 'C'],
          buildingType: ['Bloc de apartamente', 'Cladire birouri', 'Casa/Vila', 'Hala', 'Centru comercial', 'Depozit', 'Stradal'],
          // floors need to accept strings and numbers
          layout: ['Open space', 'Compartimentat', 'Partial compartimentat', 'Flexibil'],
          servicesProvided: ['Acces pentru persoane cu dizabilitati', 'Administrare si management imobiliar', 'Afisare logo pe cladire', 'Consumabile grupuri sociale', 'Contorizare separata', 'Curatenie exterioara', 'Curatenie parcare', 'Curatenie spatii comune', 'Indepartarea zapezii', 'Ingrijirea spatiilor verzi', 'Salubritate', 'Servicii de intretinere si reparatii lifturi', 'Sistem de ventilatie', 'Vestiar'],
          internetAndComunication: ['Internet', 'Posibilitatea alegerii operator date/telefonie', 'Sistem modern de telecomunicatii', 'Telefon'],
          safetyAndSecurity: ['Acces securizat parcare', 'Camera server', 'CCTV', 'Control acces securizat pe baza de cartele', 'Control al accesului pe zone', 'Detectoare de fun/incendiu', 'Extinctoare sprinkler', 'Paza permanenta', 'Receptie', 'Semaforizare parcare', 'Server room cu rack, ventilatie. control acces', 'Sistem de alarma', 'Sistem de evacuare', 'Sistem de securitate integrate BMS'],
          electricalSystem: ['Control individual pe zona de birou', 'Generator de urgenta', 'Necesita surse suplimentare de energie', 'Sursa principala de alimentare', 'Sursa UPS'],
          ecoElements: ['Building management system', 'Certificare Green Building', 'Echipamente moderne/silentioase', 'Fatada ventilata', 'Incarcator auto electrice', 'Panouri solare', 'Parcare biciclete', 'Sistem electric inteligent', 'Sistem inteligent ascensoare'],
          arhitecture: ['Certina de sticla', 'Ferestre care se deschid', 'Ferestre inclinate', 'Gresie', 'Grupuri sanitare amenajate si utilate', 'Lift cu destinatie programata', 'Mocheta', 'Parchet', 'Podea inaltata', 'Tavan fals'],
          officeAirConditioning: ['Aport de aer proaspat', 'centrala termica', 'Control individual AC pentru fiecare zona de birou', 'Sistem climatizare 2 tevi', 'Sistem climatizare 4 tevi', 'Unitati Split', 'Ventilatie mecanica'],
          parking: ['Garaj', 'Garaj subteran', 'Parcare acoperita', 'Parcare deschisa'],
          view: ['Vedere panoramica', 'Vedere spre lac', 'Vedere spre munte', 'Vedere spre oras']
        }])
      })
      .then(() => {
        return ComercialSpaceConfigModel.create([{
          pedestrianTraffic: ['Intens', 'Moderat', 'Fara trafic pietonal'],
          // floors need to accept strings an numbers
          buildingType: ['Bloc de apart.', 'Cladire birouri', 'Casa/Vila', 'Hala', 'Centru comercial', 'Depozit', 'Stradal'],
          useFor: ['Birouri', 'Comercial', 'Restaurant/Cafenea', 'Magazin de prezentare', 'Cafenea', 'Farmacie', 'Banca', 'Magazin alimentar', 'Showroom'],
          layout: ['Open space', 'Compartimentare', 'Partial compartimentat', 'Flexibil'],
          seismicRisk: ['Risc I', 'Risc II', 'Risc III'],
          landUtilities: ['Apa', 'Canalizare', 'Curent', 'Gaz', 'Irigatii', 'Utilitati in zona'],
          ecoElements: ['Building management system', 'Certificate Green Building', 'Echipamente moderne/silentioase', 'Fatada ventilata', 'Incarcator auto electrice', 'Panouri solare', 'Parcare biciclete', 'Sistem electric inteligent', 'Sistem inteligent ascensoare'],
          extraCharacteristics: ['Acces pentru persoane cu dizabilitati', 'Acces secundar marfa', 'Afisare logo pe cladire', 'Centrala termica', 'Contorizare separata', 'Grupuri sanitare amenajate si utilate', 'Posibilitate terasa', 'Sistem de alarma', 'Sistem de ventilatie', 'Vestiar'],
          parking: ['Garaj', 'Garaj subteran', 'Parcare acoperita', 'Parcare deschisa'],
          view: ['Vedere panoramica', 'Vedere spre lac', 'Vedere spre munte', 'Vedere spre oras']
        }])
      })
      .then(() => {
        return IndustrialSpaceConfig.create([{
          useFor: ['Depozitare', 'Productie'],
          officeType: ['A', 'B', 'C'],
          buildingType: ['Bloc de apartamente', 'Cladire birouri', 'Casa/Vila', 'Hala', 'Centru comercial', 'Depozit', 'Stradal'],
          // floors need to accept strings an numbers
          layout: ['Open space', 'Compartimentat', 'Partial compartimentat', 'Flexibil'],
          additionalCharacteristics: ['Acces auto', 'Acces TIR', 'Constructie demolabila', 'Curent trifazic (380V)', 'La sosea', 'Luminatoare', 'Oportunitate de investitii', 'Panouri solare', 'Pod rulant', 'Posibilitate de compartimentare', 'Sistem de alarma', 'Teren imprejmuit', 'Usi de acces', 'Vestiar'],
          parking: ['Garaj', 'Garaj subteran', 'Parcare acoperita', 'Parcare deschisa'],
          streetFacilities: ['Asfaltare', 'Betonate', 'De pamant', 'Iluminat stradal', 'Mijloace de transport in comun', 'Neamenajate', 'Pietruite'],
          landFacilities: ['Apa', 'Canalizare', 'Curent', 'Gaz', 'Irigatii', 'Utilitati in zona']
        }])
      })




      .then(users => console.log(`${''.repeat(users.length)} created`))
      .then(() => console.log('Goodbye!'))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())

  })
