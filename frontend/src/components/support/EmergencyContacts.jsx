import React from 'react';

const EmergencyContacts = () => {
  const contacts = {
    mentalHealth: [
      {
        name: 'Befrienders Worldwide',
        phone: 'Varies by country',
        website: 'https://www.befrienders.org/',
        description: 'International suicide prevention and mental health support network with local helplines in many countries.'
      },
      {
        name: 'NAMI Helpline (US)',
        phone: '1-800-950-6264',
        website: 'https://www.nami.org/help',
        description: 'National Alliance on Mental Illness provides free mental health information and support.'
      },
      {
        name: 'Befrienders Kenya',
        phone: '0722 178 177',
        website: 'https://www.befrienderskenya.org/',
        description: 'Kenyan mental health support and suicide prevention helpline.'
      }
    ],
    domesticViolence: [
      {
        name: 'National Domestic Violence Hotline (US)',
        phone: '1-800-799-7233',
        website: 'https://www.thehotline.org/',
        description: '24/7 support for survivors of domestic violence, including safety planning and resources.'
      },
      {
        name: 'Gender Violence Recovery Centre (Kenya)',
        phone: '+254 719 638 006',
        website: 'https://www.gvrc.or.ke/',
        description: 'Kenyan organization providing support and legal aid for gender-based violence survivors.'
      },
      {
        name: 'UN Women',
        phone: 'N/A',
        website: 'https://www.unwomen.org/en',
        description: 'International organization working to end violence against women globally.'
      }
    ],
    sexualAssault: [
      {
        name: 'RAINN (US)',
        phone: '1-800-656-4673',
        website: 'https://www.rainn.org/',
        description: 'Rape, Abuse & Incest National Network - confidential support for sexual assault survivors.'
      },
      {
        name: 'Coalition on Violence Against Women (COVAW) - Kenya',
        phone: '+254 20 3872485',
        website: 'https://www.covaw.or.ke/',
        description: 'Kenyan organization providing legal and psychosocial support for sexual violence survivors.'
      }
    ],
    financialCrisis: [
      {
        name: 'National Foundation for Credit Counseling (US)',
        phone: '1-800-388-2227',
        website: 'https://www.nfcc.org/',
        description: 'Free financial counseling and debt management services.'
      },
      {
        name: 'National Debt Relief (US)',
        phone: '1-844-568-9029',
        website: 'https://www.nationaldebtrelief.com/',
        description: 'Debt relief services and financial counseling.'
      },
      {
        name: 'Kenya Debt Relief Network',
        phone: 'N/A',
        website: 'https://www.debtreliefkenya.com/',
        description: 'Kenyan organization providing debt relief and financial education.'
      }
    ],
    otherEmergencies: [
      {
        name: 'Emergency Services (US)',
        phone: '911',
        website: 'N/A',
        description: 'Call for immediate emergency assistance including police, fire, and medical services.'
      },
      {
        name: 'Emergency Services (Kenya)',
        phone: '999 or 112',
        website: 'N/A',
        description: 'Kenyan emergency number for police, fire, and medical emergencies.'
      },
      {
        name: 'International Red Cross',
        phone: 'Varies by country',
        website: 'https://www.redcross.org/',
        description: 'Global humanitarian organization providing emergency response and support.'
      }
    ]
  };

  const ContactCard = ({ contact }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {contact.name}
      </h4>
      {contact.phone !== 'N/A' && contact.phone !== 'Varies by country' && (
        <p className="text-gray-600 dark:text-gray-300 mb-1">
          <strong>Phone:</strong> {contact.phone}
        </p>
      )}
      {contact.website !== 'N/A' && (
        <p className="text-gray-600 dark:text-gray-300 mb-1">
          <strong>Website:</strong> <a href={contact.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">{contact.website}</a>
        </p>
      )}
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        {contact.description}
      </p>
    </div>
  );

  return (
    <div className="mt-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Emergency Contacts & Resources
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          If you're in crisis, please reach out to these trusted organizations for immediate support and guidance.
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Mental Health Support
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contacts.mentalHealth.map((contact, index) => (
              <ContactCard key={index} contact={contact} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Domestic Violence Support
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contacts.domesticViolence.map((contact, index) => (
              <ContactCard key={index} contact={contact} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Sexual Assault Support
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contacts.sexualAssault.map((contact, index) => (
              <ContactCard key={index} contact={contact} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Financial Crisis Support
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contacts.financialCrisis.map((contact, index) => (
              <ContactCard key={index} contact={contact} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Other Emergencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contacts.otherEmergencies.map((contact, index) => (
              <ContactCard key={index} contact={contact} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
        <p className="text-yellow-800 dark:text-yellow-200 text-sm">
          <strong>Note:</strong> If you are in immediate danger, call emergency services (911 in the US, 999/112 in Kenya) right away. The information provided here is for general reference and may not be comprehensive for all locations.
        </p>
      </div>
    </div>
  );
};

export default EmergencyContacts;