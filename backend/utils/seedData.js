
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from '../models/User.js';
import Resource from '../models/Resource.js';
import Event from '../models/Event.js';
import Mentorship from '../models/Mentorship.js';
import Advice from '../models/Advice.js';
import Testimonial from '../models/Testimonial.js';
import Partner from '../models/Partner.js';

dotenv.config();

export const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany();
    await Resource.deleteMany();
    await Event.deleteMany();
    await Mentorship.deleteMany();
    await Advice.deleteMany();
    await Testimonial.deleteMany();
    await Partner.deleteMany();

    // Create users
    const users = await User.create([
      {
        name: 'Admin User',
        email: 'admin@portal.com',
        passwordHash: 'password123',
        role: 'admin',
        region: 'Global',
        verified: true
      },
      {
        name: 'Dr. Sarah Johnson',
        email: 'sarah@portal.com',
        passwordHash: 'password123',
        role: 'mentor',
        skills: ['Leadership', 'Entrepreneurship', 'Public Speaking'],
        bio: 'Entrepreneur and women empowerment advocate with 15 years experience',
        region: 'Americas',
        verified: true
      },
      {
        name: 'Amina Hassan',
        email: 'amina@portal.com',
        passwordHash: 'password123',
        role: 'mentor',
        skills: ['Technology', 'STEM Education', 'Career Development'],
        bio: 'Tech leader passionate about closing the gender gap in STEM',
        region: 'Africa',
        verified: true
      },
      {
        name: 'Maria Garcia',
        email: 'maria@portal.com',
        passwordHash: 'password123',
        role: 'user',
        interests: ['Leadership', 'Health'],
        region: 'Europe',
        verified: true
      }
    ]);

    console.log('Users created');

    // Create advice
    const advice = await Advice.create([
      {
        title: 'Managing Anxiety in Daily Life',
        summary: 'Practical strategies to cope with anxiety and regain control.',
        content: 'Anxiety can feel overwhelming, but there are effective ways to manage it. Start by identifying your triggers and practicing deep breathing exercises. Regular physical activity, maintaining a consistent sleep schedule, and talking to trusted friends or professionals can make a significant difference. Remember, it\'s okay to ask for help.',
        category: 'mental health',
        createdBy: users[1]._id
      },
      {
        title: 'Building Self-Esteem After Setbacks',
        summary: 'Ways to rebuild confidence and self-worth after challenging experiences.',
        content: 'Setbacks can shake our self-esteem, but they don\'t define us. Focus on your strengths and achievements. Practice self-compassion by treating yourself with the same kindness you\'d offer a friend. Set small, achievable goals and celebrate your progress.',
        category: 'mental health',
        createdBy: users[2]._id
      },
      {
        title: 'Creating a Budget That Works for You',
        summary: 'Simple steps to build a realistic budget and take control of your finances.',
        content: 'Start by tracking your income and expenses for a month. Categorize your spending and identify areas to cut back. Allocate funds for essentials, savings, and discretionary spending. Use budgeting apps to make it easier, and review your budget regularly.',
        category: 'financial',
        createdBy: users[1]._id
      },
      {
        title: 'Investing Basics for Women',
        summary: 'Understanding the fundamentals of investing and building wealth over time.',
        content: 'Investing can seem intimidating, but it\'s accessible to everyone. Start with low-risk options like index funds. Educate yourself through reliable sources, and consider consulting a financial advisor. Remember, investing is about long-term growth, not quick riches.',
        category: 'financial',
        createdBy: users[2]._id
      },
      {
        title: 'Embracing Your Body\'s Natural Shape',
        summary: 'Learning to appreciate and love your body as it is.',
        content: 'Society often promotes unrealistic beauty standards, but your worth isn\'t determined by your appearance. Practice positive self-talk and surround yourself with supportive people. Focus on what your body can do rather than how it looks. Self-care activities like gentle exercise and nourishing food can help you feel more connected to your body.',
        category: 'body positivity',
        createdBy: users[1]._id
      },
      {
        title: 'Overcoming Negative Body Image',
        summary: 'Strategies to challenge harmful thoughts and build a healthier relationship with your body.',
        content: 'Negative body image can be deeply ingrained, but it can be changed. Challenge media portrayals and unfollow accounts that make you feel bad. Practice mindfulness and gratitude for your body\'s functions. Seek professional help if needed, as therapy can be transformative.',
        category: 'body positivity',
        createdBy: users[2]._id
      },
      {
        title: 'Building a Strong Support Network',
        summary: 'How to cultivate meaningful relationships that provide encouragement and strength.',
        content: 'A support network is crucial for well-being. Reach out to friends, family, or join communities with shared interests. Be vulnerable and authentic in your connections. Remember, it\'s okay to set boundaries and prioritize relationships that uplift you.',
        category: 'general support',
        createdBy: users[1]._id
      },
      {
        title: 'Setting Healthy Boundaries',
        summary: 'Learning to say no and protect your time and energy.',
        content: 'Boundaries are essential for self-care. Identify what drains you and what energizes you. Practice saying no without guilt. Communicate your needs clearly and respectfully. Setting boundaries leads to healthier relationships and more personal fulfillment.',
        category: 'general support',
        createdBy: users[2]._id
      }
    ]);

    console.log('Advice created');

    // Create testimonials
    const testimonials = await Testimonial.create([
      {
        name: 'Sarah Chen',
        story: 'After losing my job during the pandemic, I struggled with severe financial anxiety. Through the empowerment programs, I learned budgeting skills and discovered micro-entrepreneurship opportunities. Today, I run my own online business and have paid off all my debts. The financial literacy workshops changed my life completely.',
        category: 'financial',
        createdBy: users[1]._id
      },
      {
        name: 'Maria Rodriguez',
        story: 'For years, I battled depression and felt completely isolated. The mental health support groups and counseling resources provided by this platform helped me understand that I wasn\'t alone. I learned coping strategies, built a support network, and now I volunteer as a peer counselor. My journey from darkness to light inspires me every day.',
        category: 'mental health',
        createdBy: users[2]._id
      },
      {
        name: 'Aisha Patel',
        story: 'Growing up, I was constantly criticized about my body shape and felt ashamed of my curves. The body positivity workshops taught me to love and appreciate my natural form. I started a body-positive Instagram account that now has thousands of followers, spreading the message that all bodies are beautiful and worthy of love.',
        category: 'body positivity',
        createdBy: users[1]._id
      },
      {
        name: 'Jennifer Thompson',
        story: 'As a single mother, I thought career advancement was impossible. The mentorship program connected me with incredible women leaders who believed in me. I completed my degree while working full-time, got promoted twice, and now lead a team of 15 people. Never underestimate what you can achieve with the right support.',
        category: 'career advancement',
        createdBy: users[2]._id
      },
      {
        name: 'Fatima Al-Zahra',
        story: 'I came from a conservative background where women were expected to prioritize family over career. The empowerment programs helped me negotiate with my family and pursue my dream of becoming a doctor. Now I\'m in my third year of medical school and have become an advocate for women\'s education in my community.',
        category: 'career advancement',
        createdBy: users[1]._id
      },
      {
        name: 'Emma Wilson',
        story: 'After my divorce, I faced both emotional trauma and financial hardship. The combined support for mental health and financial planning was exactly what I needed. I rebuilt my life stronger than before, started my own consulting business, and found joy in helping other women through similar challenges.',
        category: 'general',
        createdBy: users[2]._id
      }
    ]);

    console.log('Testimonials created');

    // Create partners
    const partners = await Partner.create([
      {
        name: 'UN Women',
        description: 'The United Nations Entity for Gender Equality and the Empowerment of Women works for the elimination of discrimination against women and girls.',
        website: 'https://www.unwomen.org',
        category: 'international',
        region: 'Global',
        featured: true
      },
      {
        name: 'World Health Organization (WHO)',
        description: 'Leading the global effort to improve health outcomes for women and girls through research, policy, and programs.',
        website: 'https://www.who.int',
        category: 'international',
        region: 'Global',
        featured: true
      },
      {
        name: 'Women\'s Empowerment Network Kenya',
        description: 'A local NGO dedicated to empowering women in Kenya through education, entrepreneurship, and community development programs.',
        website: 'https://wenkenya.org',
        category: 'local_organization',
        region: 'Africa',
        featured: true
      },
      {
        name: 'Microsoft for Women',
        description: 'Empowering women through technology education, career development, and innovation opportunities in the tech industry.',
        website: 'https://www.microsoft.com/en-us/diversity/programs/women',
        category: 'corporate',
        region: 'Global',
        featured: false
      },
      {
        name: 'Google Women Techmakers',
        description: 'A global community that provides visibility, community, and resources for women in technology.',
        website: 'https://womentechmakers.com',
        category: 'corporate',
        region: 'Global',
        featured: false
      },
      {
        name: 'African Women\'s Development Fund',
        description: 'Supporting African women\'s rights organizations and initiatives across the continent.',
        website: 'https://awdf.org',
        category: 'ngo',
        region: 'Africa',
        featured: true
      }
    ]);

    console.log('Partners created');

    // Create resources
    const resources = await Resource.create([
      {
        title: 'Women\'s Rights: A Global Perspective',
        summary: 'Comprehensive guide to understanding women\'s rights across different regions and cultures.',
        content: 'This resource explores the fundamental rights of women globally, including legal frameworks, cultural contexts, and ongoing challenges...',
        category: 'Rights',
        tags: ['human rights', 'legal', 'global'],
        author: users[1]._id,
        region: 'Global',
        featured: true
      },
      {
        title: 'Leadership Skills for Women in Business',
        summary: 'Essential leadership strategies and techniques for women entrepreneurs and business leaders.',
        content: 'Learn the key skills needed to excel in leadership roles, from communication to strategic thinking...',
        category: 'Leadership',
        tags: ['business', 'career', 'management'],
        author: users[1]._id,
        region: 'Global',
        views: 245
      },
      {
        title: 'Women in Technology: Breaking Barriers',
        summary: 'Stories and strategies for women pursuing careers in tech and STEM fields.',
        content: 'Explore success stories, challenges, and practical advice for women in technology...',
        category: 'Technology',
        tags: ['STEM', 'career', 'innovation'],
        author: users[2]._id,
        region: 'Global',
        views: 189
      },
      {
        title: 'Maternal Health: Essential Information',
        summary: 'Comprehensive guide to maternal health, prenatal care, and women\'s wellness.',
        content: 'Understanding maternal health is crucial for empowering women with knowledge about their bodies...',
        category: 'Health',
        tags: ['health', 'wellness', 'pregnancy'],
        author: users[2]._id,
        region: 'Africa',
        views: 312
      }
    ]);

    console.log('Resources created');

    // Create events
    const futureDate1 = new Date();
    futureDate1.setDate(futureDate1.getDate() + 15);

    const futureDate2 = new Date();
    futureDate2.setDate(futureDate2.getDate() + 30);

    const events = await Event.create([
      {
        title: 'Women in Leadership Summit 2025',
        description: 'Join us for an inspiring day of talks, workshops, and networking with women leaders from around the world.',
        date: futureDate1,
        location: {
          type: 'hybrid',
          city: 'Nairobi',
          country: 'Kenya',
          link: 'https://zoom.us/example'
        },
        host: users[1]._id,
        category: 'Conference',
        capacity: 200,
        tags: ['leadership', 'networking'],
        attendees: [users[3]._id]
      },
      {
        title: 'Coding Workshop for Women',
        description: 'Beginner-friendly coding workshop focused on web development fundamentals.',
        date: futureDate2,
        location: {
          type: 'online',
          link: 'https://meet.google.com/example'
        },
        host: users[2]._id,
        category: 'Workshop',
        capacity: 50,
        tags: ['technology', 'education', 'coding']
      }
    ]);

    console.log('Events created');

    // Create mentorships
    await Mentorship.create([
      {
        mentor: users[1]._id,
        mentee: users[3]._id,
        topics: ['Leadership', 'Career Development'],
        status: 'active',
        message: 'I would love to learn about entrepreneurship and leadership from your experience.',
        startDate: new Date()
      }
    ]);

    console.log('Mentorships created');
    console.log('\nSeed data created successfully!');
    console.log('\nTest Credentials:');
    console.log('Admin - admin@portal.com : password123');
    console.log('Mentor - sarah@portal.com : password123');
    console.log('Mentor - amina@portal.com : password123');
    console.log('User - maria@portal.com : password123');

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};
