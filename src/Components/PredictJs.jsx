import React, { useEffect, useState } from 'react';
import $ from 'jquery'; // Assuming you have jQuery installed
import '../css/style2.scss';

const PredictJs = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  useEffect(() => {
    const adjustHeight = () => {
      $('.js-fullheight').css('height', $(window).height());
    };

    adjustHeight();
    $(window).resize(adjustHeight);

    return () => {
      $(window).off('resize', adjustHeight);
    };
  }, []);

  const handleSidebarToggle = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <div>
      <div id="sidebar" className={sidebarActive ? 'active' : ''}>
        {/* Sidebar content */}
      </div>
      <button id="sidebarCollapse" onClick={handleSidebarToggle}>
        Toggle Sidebar
      </button>
      <div className="js-fullheight">
        {/* Other content */}
      </div>
    </div>
  );
};

export default PredictJs;
