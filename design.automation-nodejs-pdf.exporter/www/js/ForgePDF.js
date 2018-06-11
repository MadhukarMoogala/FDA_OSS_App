/////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Forge Partner Development
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////

if (!window.jQuery) alert('jQuery is required for this sample');

var ForgePDF = {
  Utility: {
    Constants: {
      BASE_URL: 'https://developer.api.autodesk.com',
      DESIGN_AUTOMATION_V2: '/autocad.io/us-east/v2/',
      WORK_ITEMS_V2: 'WorkItems'
    }

  },

  exportPDF: function (href, urn, projectid, itemId, fileName, token, status, fileType) { 
    
    if (fileType.indexOf('dwg') == -1) {
      if (status) status(true, 'Not a DWG file. Only DWG files are supported, at the moment. Aborting conversion.');
      return;
    }

    if (status) {
      status(false, 'Preparing ' + fileName);
    }
    $.post("/autocad.io/submitWorkItem", { "href": href, "projectId": projectId, "itemId": itemId, "session": token, "fileName": fileName })
        .done(function (data) {
            console.log("Data sent to Design Automation API: " + data);
            $('#dataManagementHubs').jstree(true).refresh();
        });

    if (status) {
      status(true, 'Exporting...');
    }
  }

};