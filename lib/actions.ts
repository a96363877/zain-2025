

export const playNotificationSound = () => {
    const audio=new Audio('/ds.wav')
    if (audio) {
      audio!.play().catch((error) => {
        console.error('Failed to play sound:', error);
      });
    }
  };