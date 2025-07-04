'use client';

import { useState } from 'react';

interface SizeChart {
  category: string;
  sizes: string[];
  measurements: {
    label: string;
    values: string[];
  }[];
}

const sizeCharts: SizeChart[] = [
  {
    category: 'Dames Bovenkleding',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    measurements: [
      { label: 'Borstomvang (cm)', values: ['82-86', '86-90', '90-94', '94-98', '98-102', '102-106'] },
      { label: 'Tailleomvang (cm)', values: ['64-68', '68-72', '72-76', '76-80', '80-84', '84-88'] },
      { label: 'Heupomvang (cm)', values: ['90-94', '94-98', '98-102', '102-106', '106-110', '110-114'] },
      { label: 'Nederlandse maat', values: ['34', '36', '38', '40', '42', '44'] }
    ]
  },
  {
    category: 'Dames Onderkleding',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    measurements: [
      { label: 'Tailleomvang (cm)', values: ['64-68', '68-72', '72-76', '76-80', '80-84', '84-88'] },
      { label: 'Heupomvang (cm)', values: ['90-94', '94-98', '98-102', '102-106', '106-110', '110-114'] },
      { label: 'Binnenbeenlengte (cm)', values: ['76', '78', '80', '82', '84', '86'] },
      { label: 'Nederlandse maat', values: ['34', '36', '38', '40', '42', '44'] }
    ]
  },
  {
    category: 'Heren Bovenkleding',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    measurements: [
      { label: 'Borstomvang (cm)', values: ['88-92', '92-96', '96-100', '100-104', '104-108', '108-112'] },
      { label: 'Tailleomvang (cm)', values: ['76-80', '80-84', '84-88', '88-92', '92-96', '96-100'] },
      { label: 'Nederlandse maat', values: ['46', '48', '50', '52', '54', '56'] }
    ]
  },
  {
    category: 'Heren Onderkleding',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    measurements: [
      { label: 'Tailleomvang (cm)', values: ['76-80', '80-84', '84-88', '88-92', '92-96', '96-100'] },
      { label: 'Binnenbeenlengte (cm)', values: ['80', '82', '84', '86', '88', '90'] },
      { label: 'Nederlandse maat', values: ['46', '48', '50', '52', '54', '56'] }
    ]
  },
  {
    category: 'Schoenen',
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],
    measurements: [
      { label: 'Voetlengte (cm)', values: ['23.0', '23.7', '24.3', '25.0', '25.7', '26.3', '27.0', '27.7', '28.3', '29.0'] },
      { label: 'UK maat', values: ['3', '4', '5', '6', '7', '7.5', '8', '9', '10', '11'] },
      { label: 'US maat (dames)', values: ['5.5', '6.5', '7.5', '8.5', '9.5', '10', '10.5', '-', '-', '-'] },
      { label: 'US maat (heren)', values: ['-', '-', '-', '6.5', '7.5', '8', '8.5', '9.5', '10.5', '11.5'] }
    ]
  }
];

export default function SizeGuidePage() {
  const [selectedCategory, setSelectedCategory] = useState('Dames Bovenkleding');

  const selectedChart = sizeCharts.find(chart => chart.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Maattabel</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vind de perfecte maat voor onze duurzame kleding. Meet jezelf op volgens onze instructies 
            en vergelijk met onze maattabellen voor de beste pasvorm.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Measurement Instructions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Hoe meet je jezelf op?</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-green-600 text-sm font-bold">1</span>
                    </div>
                    Borstomvang
                  </h3>
                  <p className="text-gray-600 text-sm ml-8">
                    Meet rond het breedste deel van je borst/borstkas, 
                    houd de meetlint horizontaal en niet te strak.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-green-600 text-sm font-bold">2</span>
                    </div>
                    Tailleomvang
                  </h3>
                  <p className="text-gray-600 text-sm ml-8">
                    Meet rond het smalste deel van je taille, 
                    meestal net boven je navel.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-green-600 text-sm font-bold">3</span>
                    </div>
                    Heupomvang
                  </h3>
                  <p className="text-gray-600 text-sm ml-8">
                    Meet rond het breedste deel van je heupen, 
                    ongeveer 20 cm onder je taille.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-green-600 text-sm font-bold">4</span>
                    </div>
                    Binnenbeenlengte
                  </h3>
                  <p className="text-gray-600 text-sm ml-8">
                    Meet vanaf je kruis tot aan je enkel, 
                    langs de binnenkant van je been.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-green-600 text-sm font-bold">5</span>
                    </div>
                    Voetlengte
                  </h3>
                  <p className="text-gray-600 text-sm ml-8">
                    Meet van je hiel tot je langste teen, 
                    staand op een vel papier.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">💡 Tips voor het meten</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Meet in je ondergoed voor de beste resultaten</li>
                  <li>• Vraag iemand om je te helpen</li>
                  <li>• Houd het meetlint recht en niet te strak</li>
                  <li>• Meet meerdere keren voor zekerheid</li>
                  <li>• Bij twijfel tussen twee maten, kies de grotere</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Size Charts */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Category Selector */}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Selecteer categorie</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {sizeCharts.map((chart) => (
                    <button
                      key={chart.category}
                      onClick={() => setSelectedCategory(chart.category)}
                      className={`p-3 text-sm font-medium rounded-lg transition-colors ${
                        selectedCategory === chart.category
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {chart.category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Chart Table */}
              {selectedChart && (
                <div className="overflow-x-auto">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{selectedChart.category}</h3>
                  <table className="w-full border-collapse border border-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                          Maat
                        </th>
                        {selectedChart.sizes.map((size) => (
                          <th key={size} className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">
                            {size}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {selectedChart.measurements.map((measurement, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                            {measurement.label}
                          </td>
                          {measurement.values.map((value, valueIndex) => (
                            <td key={valueIndex} className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                              {value}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Fit Guide */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Pasvorm gids</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Slim Fit</h4>
                    <p className="text-gray-600 text-sm">
                      Nauwsluitend model dat de lichaamslijn volgt. 
                      Kies je normale maat.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Regular Fit</h4>
                    <p className="text-gray-600 text-sm">
                      Comfortabele pasvorm met voldoende bewegingsruimte. 
                      Onze standaard pasvorm.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4a1 1 0 011-1h4m0 0V1m0 2h2m0 0V1m0 2h2m0 0V1m0 2h4a1 1 0 011 1v4M3 12h18m-9 4.5V19m-4.5-2.5h9" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Oversized</h4>
                    <p className="text-gray-600 text-sm">
                      Ruime, ontspannen pasvorm. 
                      Overweeg een maat kleiner voor een normale fit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Size Advice */}
            <div className="mt-8 bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Maatadvies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">🤔 Twijfel tussen twee maten?</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Kies de grotere maat voor meer comfort. Onze kleding is gemaakt van natuurlijke materialen 
                    die kunnen krimpen na het wassen.
                  </p>
                  <h4 className="font-medium text-gray-900 mb-2">📏 Maten verschillen per merk</h4>
                  <p className="text-gray-600 text-sm">
                    Gebruik altijd onze maattabel, ook al draag je normaal een andere maat. 
                    Elk merk heeft zijn eigen maatvoering.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">🔄 Gratis ruilen</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Niet de juiste maat? Geen probleem! Je kunt gratis ruilen voor een andere maat 
                    binnen 14 dagen.
                  </p>
                  <h4 className="font-medium text-gray-900 mb-2">💬 Persoonlijk advies</h4>
                  <p className="text-gray-600 text-sm">
                    Neem contact met ons op voor persoonlijk maatadvies. 
                    We helpen je graag de perfecte maat te vinden.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-8 bg-white rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Hulp nodig bij het kiezen van je maat?
              </h3>
              <p className="text-gray-600 mb-6">
                Ons team helpt je graag met persoonlijk maatadvies voor de perfecte pasvorm.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Maatadvies vragen
                </a>
                <a
                  href="/returns"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 font-medium rounded-lg border border-green-600 hover:bg-green-50 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                  Retourbeleid
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

