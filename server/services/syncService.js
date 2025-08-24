const Payment = require('../models/BudgetModel');

class SyncService {
  async processOfflinePayment(paymentData, userId) {
    try {
      // Validate payment data
      if (!paymentData.amount || !paymentData.recipient) {
        throw new Error('Invalid payment data');
      }

      // Create payment record
      const payment = await Payment.create({
        ...paymentData,
        userId,
        status: 'completed',
        source: 'offline-sync'
      });

      return {
        success: true,
        paymentId: payment._id
      };
    } catch (error) {
      console.error('Sync error:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }
}

module.exports = new SyncService();