import { toPng } from 'html-to-image';

/**
 * 等待图片加载完成
 */
const waitForImages = async (element) => {
  const images = element.querySelectorAll('img');
  const imagePromises = Array.from(images)
    .filter(img => !img.complete)
    .map(img => new Promise((resolve) => {
      img.onload = img.onerror = resolve;
    }));
  
  await Promise.all(imagePromises);
};

/**
 * 等待渲染完成
 */
const waitForRender = (delay = 200) => {
  return new Promise(resolve => {
    requestAnimationFrame(() => {
      setTimeout(resolve, delay);
    });
  });
};

/**
 * 生成手机模拟器的长截图
 * @param {HTMLElement} phoneElement - 手机模拟器元素 (不包括外层容器)
 * @param {Object} options - 配置选项
 * @returns {Promise<string>} - 返回图片的 data URL
 */
export const captureLongScreenshot = async (phoneElement, options = {}) => {
  const {
    quality = 0.95,
    backgroundColor = '#ffffff',
    filename = 'wechat-screenshot.png',
    download = true
  } = options;

  try {
    console.log('🚀 开始长截图...');
    
    // 等待所有图片加载完成
    await waitForImages(phoneElement);
    
    // 获取聊天列表元素
    let chatListElement = phoneElement.querySelector('.scrollbar-hide');
    
    if (!chatListElement) {
      const allDivs = phoneElement.querySelectorAll('div');
      chatListElement = Array.from(allDivs).find(div => {
        const style = window.getComputedStyle(div);
        return (style.overflow === 'auto' || style.overflowY === 'auto') && 
               div.querySelector('.h-\\[74px\\]');
      });
    }
    
    if (!chatListElement) {
      throw new Error('找不到聊天列表元素');
    }

    console.log('✅ 找到聊天列表元素');

    // 保存原始样式
    const originalStyles = {
      chatList: {
        overflow: chatListElement.style.overflow,
        height: chatListElement.style.height,
        maxHeight: chatListElement.style.maxHeight,
      },
      phoneElement: {
        borderRadius: phoneElement.style.borderRadius,
        boxShadow: phoneElement.style.boxShadow,
      }
    };
    
    // 临时应用截图模式样式 - 移除圆角和阴影
    phoneElement.style.borderRadius = '0';
    phoneElement.style.boxShadow = 'none';
    
    // 临时移除滚动和高度限制，让内容完全展开
    chatListElement.style.overflow = 'visible';
    chatListElement.style.height = 'auto';
    chatListElement.style.maxHeight = 'none';
    
    // 强制所有图片立即加载
    const images = phoneElement.querySelectorAll('img');
    images.forEach(img => {
      img.loading = 'eager';
    });

    // 等待DOM完全更新和渲染
    await waitForRender(500);
    
    // 再次等待确保所有图片加载
    await waitForImages(phoneElement);
    
    // 获取设备像素比
    const pixelRatio = window.devicePixelRatio || 1;
    
    // 获取展开后的实际尺寸
    const phoneWidth = phoneElement.offsetWidth;
    const phoneHeight = phoneElement.offsetHeight;
    
    console.log('📐 截图尺寸:', { phoneWidth, phoneHeight, pixelRatio });
    
    // 使用 html-to-image 生成截图
    const dataUrl = await toPng(phoneElement, {
      quality,
      backgroundColor,
      pixelRatio,
      width: phoneWidth,
      height: phoneHeight,
      cacheBust: false, // 避免重复请求导致失败，依赖 img 标签的 crossOrigin
      skipAutoScale: false,
      style: {
        margin: '0',
        padding: '0',
      }
    });
    
    console.log('✅ 截图完成');
    
    // 恢复手机元素样式
    phoneElement.style.borderRadius = originalStyles.phoneElement.borderRadius;
    phoneElement.style.boxShadow = originalStyles.phoneElement.boxShadow;
    
    // 恢复聊天列表原始样式
    chatListElement.style.overflow = originalStyles.chatList.overflow;
    chatListElement.style.height = originalStyles.chatList.height;
    chatListElement.style.maxHeight = originalStyles.chatList.maxHeight;
    
    if (download) {
      downloadImage(dataUrl, filename);
    }
    
    return dataUrl;
    
  } catch (error) {
    console.error('❌ 长截图生成失败:', error);
    throw error;
  }
};

/**
 * 下载图片
 */
const downloadImage = (dataUrl, filename) => {
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * 简化版截图函数 - 仅截取当前可见区域
 */
export const captureScreenshot = async (phoneElement, options = {}) => {
  const {
    quality = 0.95,
    backgroundColor = '#ffffff',
    filename = 'wechat-screenshot.png',
    download = true
  } = options;

  try {
    // 强制所有图片立即加载
    const images = phoneElement.querySelectorAll('img');
    images.forEach(img => {
      img.loading = 'eager';
    });

    await waitForImages(phoneElement);
    await waitForRender();

    const pixelRatio = window.devicePixelRatio || 1;
    
    const dataUrl = await toPng(phoneElement, {
      quality,
      backgroundColor,
      pixelRatio,
      cacheBust: false,
      style: {
        margin: '0',
        padding: '0',
      }
    });
    
    if (download) {
      downloadImage(dataUrl, filename);
    }
    
    return dataUrl;
    
  } catch (error) {
    console.error('截图失败:', error);
    throw error;
  }
};
