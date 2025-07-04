import { useEffect, useState } from 'react';

const NotificationCard = () => {
  const [notifications, setNotifications] = useState<string[]>([]);
  const [currentNotification, setCurrentNotification] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Sample names
  const names = ['Sarah', 'Mike', 'John', 'Emily', 'David', 'Jessica', 'Robert', 'Lisa', 'Michael', 'Amy'];
  const actions = ['just booked', 'viewed pricing', 'checked availability', 'saved this item'];
  const generateNewNotification = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    const randomTime = Math.floor(Math.random() * 3) + 1;
    const timeText = randomTime === 1 ? 'just now' : `${randomTime} min ago`;
    
    const newNotification = `${randomName} ${randomAction} (${timeText})`;
    setCurrentNotification(newNotification);
    setNotifications(prev => [newNotification, ...prev].slice(0, 5)); // Keep last 5
  };


  useEffect(() => {
    // Initial setup
    generateNewNotification();

    // Set up interval for new notifications
    const interval = setInterval(() => {
      generateNewNotification();
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentNotification) {
      // Show notification for 5 seconds
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [currentNotification]);

  return (
    <div className="hidden md:block fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4">
      {/* Current Toast Notification */}
      {isVisible && (
        <div className="mb-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 animate-slide-up-fade">
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span>{currentNotification}</span>
            </div>
          </div>
        </div>
      )}

      {/* Optional: Show recent notifications in a list (remove if you only want the toast) */}
      {/* <div className="mt-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
        <div className="text-sm text-white/80 space-y-2">
          {notifications.map((notification, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span>{notification}</span>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default NotificationCard;