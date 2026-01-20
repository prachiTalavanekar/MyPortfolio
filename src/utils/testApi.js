// Simple API test utility
import { contactAPI } from '../services/api';

export const testApiConnection = async () => {
  try {
    // Test if backend is running by making a simple request
    const response = await fetch('http://localhost:5000/api/health');
    const data = await response.json();
    
    if (data.status === 'OK') {
      console.log('✅ Backend API is running');
      return { success: true, message: 'API connection successful' };
    }
  } catch (error) {
    console.error('❌ Backend API connection failed:', error.message);
    return { 
      success: false, 
      message: 'Backend server is not running. Please start the server on port 5000.' 
    };
  }
};

export const testContactForm = async () => {
  try {
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'API Test',
      message: 'This is a test message to verify the contact form API is working.'
    };

    const response = await contactAPI.submit(testData);
    
    if (response.data.success) {
      console.log('✅ Contact form API is working');
      return { success: true, message: 'Contact form test successful' };
    }
  } catch (error) {
    console.error('❌ Contact form API test failed:', error.message);
    return { 
      success: false, 
      message: 'Contact form API is not working. Check backend server.' 
    };
  }
};