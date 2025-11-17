
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from '../models/User.js';
import Resource from '../models/Resource.js';
import Event from '../models/Event.js';
import Mentorship from '../models/Mentorship.js';

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany();
    await Resource.deleteMany();
    await Event.deleteMany();
    await Mentorship.deleteMany();

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

    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
