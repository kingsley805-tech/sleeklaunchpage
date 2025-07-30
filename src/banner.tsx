import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  
  CheckCircle,
  
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const launchDate = new Date('2025-08-09T00:00:00');
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = launchDate.getTime() - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const Logo = () => (
    <svg width="118" height="35" viewBox="0 0 118 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
      <path d="M101.785 27.9538L101.516 22.3595L111.538 11.7992H116.923L107.888 21.5219L105.196 24.3938L101.785 27.9538ZM97.4475 32.7404V11.7992H102.264V32.7404H97.4475ZM111.777 32.7404L104.328 23.616L107.499 20.1757L117.431 32.7404H111.777Z" fill="currentColor"/>
      <path d="M28.0793 32.74V11.7988H32.9256V28.7911H43.4261V32.74H28.0793Z" fill="currentColor"/>
      <path d="M63.1716 28.8334H47.9793V32.74H63.1716V28.8334Z" fill="#7c3aed"/>
      <path d="M63.1716 28.8334H47.9793V32.74H63.1716V28.8334Z" fill="#7c3aed"/>
      <path d="M63.1716 11.7992H47.9793V15.7058H63.1716V11.7992Z" fill="#7c3aed"/>
      <path d="M85.886 20.3161H47.9793V24.2227H85.886V20.3161Z" fill="#7c3aed"/>
      <path d="M85.8859 28.8334H70.6936V32.74H85.8859V28.8334Z" fill="#7c3aed"/>
      <path d="M85.8859 28.8334H70.6936V32.74H85.8859V28.8334Z" fill="#7c3aed"/>
      <path d="M85.8859 11.7992H70.6936V15.7058H85.8859V11.7992Z" fill="#7c3aed"/>
      <path d="M83.1236 0.8224L76.3748 7.57125L79.1371 10.3336L85.886 3.58478L83.1236 0.8224Z" fill="currentColor"/>
      <path d="M11.7578 33.0194C10.0988 33.2525 8.47834 33.2587 6.89648 33.038C5.31184 32.7974 4.00542 32.3869 2.97721 31.8063L4.09867 27.963C5.07627 28.4701 6.19661 28.8463 7.45969 29.0918C8.73974 29.3147 10.0019 29.3387 11.2462 29.1638C12.1942 29.0306 12.9421 28.8349 13.4899 28.5766C14.0547 28.2958 14.4517 27.9681 14.681 27.5935C14.9104 27.2189 14.9945 26.8143 14.9334 26.3798C14.8557 25.8268 14.5774 25.4228 14.0985 25.1679C13.6168 24.8932 13.0065 24.707 12.2677 24.6095C11.5262 24.4921 10.7084 24.4057 9.81439 24.35C8.93735 24.2719 8.04489 24.1556 7.13701 24.0013C6.24887 23.8441 5.41876 23.5982 4.64667 23.2636C3.87458 22.9291 3.21144 22.4382 2.65725 21.791C2.12281 21.141 1.77787 20.2631 1.62243 19.157C1.45588 17.972 1.62061 16.8512 2.11662 15.7946C2.6296 14.7154 3.48773 13.7993 4.69103 13.0461C5.91129 12.2704 7.49908 11.7451 9.45439 11.4703C10.7579 11.2871 12.0639 11.2647 13.3724 11.403C14.678 11.5216 15.8578 11.8191 16.9116 12.2953L15.9425 16.1475C14.897 15.7305 13.8723 15.4616 12.8684 15.3409C11.8618 15.2004 10.8943 15.1954 9.96604 15.3258C9.03776 15.4563 8.29263 15.6718 7.73064 15.9723C7.16866 16.2728 6.78427 16.6189 6.57748 17.0105C6.36791 17.3823 6.29504 17.7954 6.35888 18.2497C6.43383 18.7829 6.71215 19.1869 7.19386 19.4616C7.67278 19.7165 8.28163 19.8928 9.02041 19.9904C9.75919 20.088 10.5671 20.1758 11.4441 20.254C12.3409 20.3293 13.232 20.4357 14.1173 20.5731C15.0225 20.7078 15.8611 20.9424 16.6331 21.2769C17.4052 21.6115 18.0585 22.1038 18.5929 22.7538C19.1471 23.4009 19.5006 24.2677 19.6532 25.354C19.817 26.5192 19.641 27.6316 19.1252 28.691C18.6095 29.7503 17.7415 30.6679 16.5212 31.4436C15.3207 32.2165 13.7329 32.7418 11.7578 33.0194Z" fill="currentColor"/>
    </svg>
  );

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 ">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
      >
        {/* Left Content Panel */}
        <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-between text-gray-800">
          <div>
            <div className="mb-8">
              <Logo />
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-start leading-tight">
              Find Your Pharmacy,
              <span className="text-violet-600 block">Instantly.</span>
            </h1>
            
            <p className="text-lg text-gray-600 text-start mb-8">
              The revolutionary way for patients to locate nearby pharmacies and medications for their prescribed med... Launching soon.
            </p>
          </div>
          
          <div>
            {/* Countdown */}
            <div className="mb-8 text-start w-fu">
             <div className="w-full flex  text-start">
  <div className="flex gap-4 text-start">
    {Object.entries(timeLeft).map(([unit, value]) => (
      <div key={unit} className="text-start">
        <div className="text-3xl text-start font-bold text-violet-600">
          {value.toString().padStart(2, '0')}
        </div>
        <div className="text-xs text-gray-500 uppercase tracking-wider">
          {unit}
        </div>
      </div>
    ))}
  </div>
</div>

              <p className="font-semibold text-violet-600 mt-2">Launching on August 9th, 2025</p>
            </div>
            
            {/* Subscription Form */}
            {!subscribed ? (
              <form onSubmit={handleSubscribe}>
                <label className="text-sm font-semibold text-start mb-2 block">Be the first to know</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-12 px-4 rounded-lg border-gray-300 focus:ring-violet-500 focus:border-violet-500"
                    required
                  />
                  <Button 
                    type="submit"
                    className="h-12 px-6 bg-violet-600 hover:bg-violet-700 rounded-lg text-white font-semibold"
                  >
                    Notify Me
                  </Button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center"
              >
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                <p className="text-green-800 font-semibold">
                  Thank you! We'll be in touch.
                </p>
              </motion.div>
            )}
          </div>
        </div>
        
        {/* Right Image Panel */}
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-0">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-400/10 to-indigo-500">
            <img 
              src="https://media.istockphoto.com/id/2157922985/vector/smartphone-map-app-with-gps-navigation-and-red-marker-pin-point-on-screen-vector.jpg?s=612x612&w=0&k=20&c=8ugY39K1ubj9WO4uZVPyREhD_5jJWHqaL0ZiLY3bfVo="
              alt="Map with pharmacy locations"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 p-6 flex flex-col justify-end items-center">
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
              >
                <Card className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden mb-4 transform -rotate-6 hover:rotate-0 hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-3 flex items-center gap-3">
                    <img 
                      src="https://media.istockphoto.com/id/1603361100/photo/portrait-of-black-woman-in-pharmacy-with-tablet-smile-and-online-inventory-list-for-medicine.jpg?s=612x612&w=0&k=20&c=XmWkRM4DHvtVUPNG_7uzaKFhWumBN2egZMgAK7ENomk="
                      alt="Friendly pharmacist"
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-800">Dr. Helen Roe</p>
                      <p className="text-sm text-gray-600">Lead Pharmacist</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Card className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden transform rotate-3 hover:rotate-0 hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-3 flex items-center gap-3">
                    <img 
                      src="https://media.istockphoto.com/id/1153750624/photo/profile-portrait-of-a-senior-man-with-white-beard.jpg?s=612x612&w=0&k=20&c=9YeRvXIUruZl-q9ADIk25YvoQxjMC8B8L1NPIQQc5pI="
                      alt="Modern pharmacy interior"
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-800">City Health Pharmacy</p>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 mt-1">Open Now</Badge>
                    </div>
                  </CardContent>
                </Card>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}