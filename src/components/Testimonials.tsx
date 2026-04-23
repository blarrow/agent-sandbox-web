import React, { useState, useEffect, useRef } from 'react';

interface Testimonial {
  id: number;
  logo: string;
  company: string;
  quote: string;
  author: string;
  position: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<number | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      logo: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20company%20logo%20design%20minimal%20blue&image_size=square',
      company: '科技有限公司',
      quote: '这个产品彻底改变了我们的工作方式，提高了团队效率，非常推荐！',
      author: '张明',
      position: '技术总监'
    },
    {
      id: 2,
      logo: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20company%20logo%20design%20minimal%20green&image_size=square',
      company: '创新企业',
      quote: '服务质量一流，团队响应迅速，解决问题能力强，是值得信赖的合作伙伴。',
      author: '李华',
      position: 'CEO'
    },
    {
      id: 3,
      logo: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20company%20logo%20design%20minimal%20red&image_size=square',
      company: '数字营销公司',
      quote: '使用他们的产品后，我们的营销效果显著提升，客户满意度大幅增加。',
      author: '王芳',
      position: '市场总监'
    },
    {
      id: 4,
      logo: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20company%20logo%20design%20minimal%20purple&image_size=square',
      company: '金融科技公司',
      quote: '系统稳定可靠，数据安全有保障，为我们的业务发展提供了强大支持。',
      author: '赵强',
      position: 'CTO'
    }
  ];

  const nextTestimonial = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const goToTestimonial = React.useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const toggleAutoPlay = React.useCallback(() => {
    setIsAutoPlaying(!isAutoPlaying);
  }, [isAutoPlaying]);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(nextTestimonial, 5000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, nextTestimonial]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">客户评价</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            听听我们的合作伙伴怎么说，他们的成功案例是我们最好的证明
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-8 bg-white">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6">
                      <img 
                        src={testimonial.logo} 
                        alt={`${testimonial.company} logo`} 
                        loading="lazy"
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{testimonial.company}</h3>
                    <div className="mb-6">
                      <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                    </div>
                    <div className="text-gray-500">
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            onClick={prevTestimonial}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            onClick={nextTestimonial}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'}`}
                onClick={() => goToTestimonial(index)}
              />
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <button 
              className="flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-600 rounded-lg hover:bg-indigo-200 transition-colors"
              onClick={toggleAutoPlay}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isAutoPlaying ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                ) : (
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </>
                )}
              </svg>
              {isAutoPlaying ? '暂停自动播放' : '开启自动播放'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;