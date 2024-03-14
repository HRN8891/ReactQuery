import {Mixpanel, MixpanelProperties} from 'mixpanel-react-native';
import config from '../constants/config';

class AnalyticsManager {
  static managerInstance: Mixpanel;
  static async init(userId: string) {
    if (!this.managerInstance) {
      try {
        this.managerInstance = new Mixpanel(config.MIXPANEL_KEY, true);
        await this.managerInstance.init();
        this.managerInstance.identify(userId);
      } catch (error) {
        console.error('Error initializing Mixpanel:', error);
      }
    }
    this.managerInstance?.identify(userId);
  }

  static reset() {
    this.managerInstance?.reset();
  }

  static flush() {
    this.managerInstance?.flush();
  }

  static track(event: string, properties?: MixpanelProperties) {
    this.managerInstance?.track(event, properties);
  }
}

export default AnalyticsManager;
