const mongoose = require('mongoose')
const User = require('./models/user')
const Apartment = require('./models/apartmentModel')
const ApartmentConfigModel = require('./models/apartmentConfigModel')

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
            username: 'Marius',
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
          comfort: ['1', '2', '3', 'Lux'],
          interiorState: ['Ultrafinisat', 'Finisat modern', 'Semifinisat', 'Finisat clasic', 'Buna', 'Nou', 'Renovat', 'Necesita renovare'],
          buildingType: ['Bloc de apartamente', 'Casa/Vila', 'Bloc de garsoniere', 'Bloc mixt'],
          constructionStage: ['Finalizata', 'Finisat', 'Semifinisat', 'In constructie', 'La gri', 'La rosu', 'Necesita renovare', 'De demolat', 'Structura', 'Proiect'],
          constructionType: ['Beton', 'Caramida', 'BCA', 'Lemn', 'Metal', 'Altele', 'Cadre', 'Placi', 'Monolit'],
          seismicRisk: ['Urgenta', 'Risc I', 'Risc II', 'Risc III'],
          features: ['Aer conditionat', 'Aeroterme', 'Aragaz', 'Bideu', 'Cabina de dus', 'Cada', 'Dressing', 'Dus exterior', 'Frigider', 'Hota', 'Jacuzzi', 'Masina de splat rufe', 'Masina de spalat vase', 'Scara interioara', 'Semineu', 'Sistem de alarma', 'TV'],
          realEstateFacilities: ['Acces persoane cu dizabilitati', 'Acoperis', 'Camera de aburi', 'Fitness', 'Interfon', 'Parcare bicicleta', 'Paza', 'Paza permanenta', 'Piscina comunala', 'Piscina exterioara', 'Piscina interioara', 'Piscina privata', 'Senzor de fum', 'Spa', 'Spalatorie', 'Spatii agrement', 'Supraveghere video', 'Telecomanda poarta acces auto', 'Telecomanda poarta garaj', 'Uscatorie', 'Videointerfon', 'Wireless'],
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
          view: ['Vedere panoramica', 'Vedere spre lac', 'Vedere spre munte', 'Vedere spre oras']


        }
        ])
      })




      .then(users => console.log(`${''.repeat(users.length)} created`))
      .then(() => console.log('Goodbye!'))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())

  })
      