import React from 'react'

const Dashboard = () => {
  return (
    <div className="container">
      <div className="crumbs">
        <ul id="breadcrumbs" className="breadcrumb">
          <li> <i className="icon-home" /> <a href="index.html">Dashboard</a> </li>
          <li className="current"> <a href="pages_calendar.html" title>Calendar</a> </li>
        </ul>
        <ul className="crumb-buttons">
          <li><a href="charts.html" title><i className="icon-signal" /><span>Statistics</span></a></li>
          <li className="dropdown"><a href="#" title data-toggle="dropdown"><i className="icon-tasks" /><span>Users <strong>(+3)</strong></span><i className="icon-angle-down left-padding" /></a>
            <ul className="dropdown-menu pull-right">
              <li><a href="form_components.html" title><i className="icon-plus" />Add new User</a>
              </li>
              <li><a href="tables_dynamic.html" title><i className="icon-reorder" />Overview</a></li>
            </ul>
          </li>
          <li className="range"><a href="#"> <i className="icon-calendar" /> <span /> <i className="icon-angle-down" /> </a></li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="widget box">
            <div className="widget-header">
              <h4><i className="icon-reorder" /> Table Classes</h4>
              <div className="toolbar no-padding">
                <div className="btn-group"> <span className="btn btn-xs widget-collapse"><i className="icon-angle-down" /></span> </div>
              </div>
            </div>
            <div className="widget-content no-padding">
              <table className="table table-hover table-striped table-bordered table-highlight-head">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>.table</code></td>
                    <td>Default table styling</td>
                  </tr>
                  <tr>
                    <td><code>.table-striped</code></td>
                    <td>Different background for even rows</td>
                  </tr>
                  <tr>
                    <td><code>.table-bordered</code></td>
                    <td>Default bordered table</td>
                  </tr>
                  <tr>
                    <td><code>.table-hover</code></td>
                    <td>Change background color for rows on hover</td>
                  </tr>
                  <tr>
                    <td><code>.table-condensed</code></td>
                    <td>Smaller padding</td>
                  </tr>
                  <tr>
                    <td><code>.table-checkable</code></td>
                    <td>Each row is checkable if a checkbox is provided</td>
                  </tr>
                  <tr>
                    <td><code>.table-no-inner-border</code></td>
                    <td>Remove inner borders if borders were applied</td>
                  </tr>
                  <tr>
                    <td><code>.table-highlight-head</code></td>
                    <td>Darker background for table-head</td>
                  </tr>
                  <tr>
                    <td><code>.table-checkable</code></td>
                    <td>Table with checkboxes</td>
                  </tr>
                  <tr>
                    <td><code>.table-vertical-align</code></td>
                    <td>Centering all rows vertically</td>
                  </tr>
                  <tr>
                    <td><code>div.table-footer</code></td>
                    <td>Footer for static tables. Goes after table</td>
                  </tr>
                  <tr>
                    <td><code>div.widget-content.no-padding</code></td>
                    <td>Removes padding from widget</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="widget box">
            <div className="widget-header">
              <h4><i className="icon-reorder" /> Simple Table</h4>
              <div className="toolbar no-padding">
                <div className="btn-group"> <span className="btn btn-xs widget-collapse"><i className="icon-angle-down" /></span> </div>
              </div>
            </div>
            <div className="widget-content">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th className="hidden-xs">Username</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Joey</td>
                    <td>Greyson</td>
                    <td className="hidden-xs">joey123</td>
                    <td><span className="label label-success">Approved</span></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Wolf</td>
                    <td>Bud</td>
                    <td className="hidden-xs">wolfy</td>
                    <td><span className="label label-info">Pending</span></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Darin</td>
                    <td>Alec</td>
                    <td className="hidden-xs">alec82</td>
                    <td><span className="label label-warning">Suspended</span></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Andrea</td>
                    <td>Brenden</td>
                    <td className="hidden-xs">andry</td>
                    <td><span className="label label-danger">Blocked</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="widget box">
            <div className="widget-header">
              <h4><i className="icon-reorder" /> Striped Table</h4>
              <div className="toolbar no-padding">
                <div className="btn-group"> <span className="btn btn-xs widget-collapse"><i className="icon-angle-down" /></span> </div>
              </div>
            </div>
            <div className="widget-content">
              <table className="table table-hover table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th className="hidden-xs">Username</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Joey</td>
                    <td>Greyson</td>
                    <td className="hidden-xs">joey123</td>
                    <td><span className="label label-success">Approved</span></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Wolf</td>
                    <td>Bud</td>
                    <td className="hidden-xs">wolfy</td>
                    <td><span className="label label-info">Pending</span></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Darin</td>
                    <td>Alec</td>
                    <td className="hidden-xs">alec82</td>
                    <td><span className="label label-warning">Suspended</span></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Andrea</td>
                    <td>Brenden</td>
                    <td className="hidden-xs">andry</td>
                    <td><span className="label label-danger">Blocked</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="widget box">
            <div className="widget-header">
              <h4><i className="icon-reorder" /> Bordered Table</h4>
              <div className="toolbar no-padding">
                <div className="btn-group"> <span className="btn btn-xs widget-collapse"><i className="icon-angle-down" /></span> </div>
              </div>
            </div>
            <div className="widget-content">
              <table className="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th className="hidden-xs">Username</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Joey</td>
                    <td>Greyson</td>
                    <td className="hidden-xs">joey123</td>
                    <td><span className="label label-success">Approved</span></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Wolf</td>
                    <td>Bud</td>
                    <td className="hidden-xs">wolfy</td>
                    <td><span className="label label-info">Pending</span></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Darin</td>
                    <td>Alec</td>
                    <td className="hidden-xs">alec82</td>
                    <td><span className="label label-warning">Suspended</span></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Andrea</td>
                    <td>Brenden</td>
                    <td className="hidden-xs">andry</td>
                    <td><span className="label label-danger">Blocked</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="widget box">
            <div className="widget-header">
              <h4><i className="icon-reorder" /> Condensed Table</h4>
              <div className="toolbar no-padding">
                <div className="btn-group"> <span className="btn btn-xs widget-collapse"><i className="icon-angle-down" /></span> </div>
              </div>
            </div>
            <div className="widget-content">
              <table className="table table-hover table-condensed">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th className="hidden-xs">Username</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Joey</td>
                    <td>Greyson</td>
                    <td className="hidden-xs">joey123</td>
                    <td><span className="label label-success">Approved</span></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Wolf</td>
                    <td>Bud</td>
                    <td className="hidden-xs">wolfy</td>
                    <td><span className="label label-info">Pending</span></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Darin</td>
                    <td>Alec</td>
                    <td className="hidden-xs">alec82</td>
                    <td><span className="label label-warning">Suspended</span></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Andrea</td>
                    <td>Brenden</td>
                    <td className="hidden-xs">andry</td>
                    <td><span className="label label-danger">Blocked</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="widget">
            <div className="widget-header">
              <h4><i className="icon-reorder" /> Advanced Table</h4>
              <div className="toolbar no-padding">
                <div className="btn-group"> <span className="btn btn-xs widget-collapse"><i className="icon-angle-down" /></span> </div>
              </div>
            </div>
            <div className="widget-content">
              <table className="table table-striped table-bordered table-checkable table-highlight-head table-no-inner-border table-hover">
                <thead>
                  <tr>
                    <th className="checkbox-column"> <input type="checkbox" className="uniform" /> </th>
                    <th>Progressbar</th>
                    <th className="align-center">Icons</th>
                    <th className="align-center">Buttons</th>
                    <th className="align-center">Labels</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="checkbox-column"> <input type="checkbox" className="uniform" /> </td>
                    <td>
                      <div className="progress progress-striped active">
                        <div style={{ width: '30%' }} className="progress-bar progress-bar-info">
                        </div>
                      </div>
                    </td>
                    <td className="align-center">
                      <ul className="table-controls">
                        <li><a href="javascript:void(0);" className="bs-tooltip" title="Search"><i className="icon-search" /></a> </li>
                        <li><a href="javascript:void(0);" className="bs-tooltip" title="Edit"><i className="icon-pencil" /></a> </li>
                        <li><a href="javascript:void(0);" className="bs-tooltip" title="Delete"><i className="icon-trash" /></a> </li>
                      </ul>
                    </td>
                    <td className="align-center"> <span className="btn-group"> <a href="javascript:void(0);" className="btn btn-xs bs-tooltip" title="Search"><i className="icon-search" /></a> <a href="javascript:void(0);" className="btn btn-xs bs-tooltip" title="Edit"><i className="icon-pencil" /></a> <a href="javascript:void(0);" className="btn btn-xs bs-tooltip" title="Delete"><i className="icon-trash" /></a> </span> </td>
                    <td className="align-center"><span className="label label-warning">X</span></td>
                  </tr>
                  <tr>
                    <td className="checkbox-column"> <input type="checkbox" className="uniform" /> </td>
                    <td>
                      <div className="progress progress-striped active">
                        <div style={{ width: '60%' }} className="progress-bar progress-bar-success">
                        </div>
                      </div>
                    </td>
                    <td className="align-center">
                      <ul className="table-controls">
                        <li><a href="javascript:void(0);" className="bs-tooltip" title="Search"><i className="icon-search" /></a> </li>
                        <li><a href="javascript:void(0);" className="bs-tooltip" title="Edit"><i className="icon-pencil" /></a> </li>
                        <li><a href="javascript:void(0);" className="bs-tooltip" title="Delete"><i className="icon-trash" /></a> </li>
                      </ul>
                    </td>
                    <td className="align-center"> <span className="btn-group"> <a href="javascript:void(0);" className="btn btn-xs bs-tooltip" title="Search"><i className="icon-search" /></a> <a href="javascript:void(0);" className="btn btn-xs bs-tooltip" title="Edit"><i className="icon-pencil" /></a> <a href="javascript:void(0);" className="btn btn-xs bs-tooltip" title="Delete"><i className="icon-trash" /></a> </span> </td>
                    <td className="align-center"><span className="label label-danger">X</span></td>
                  </tr>
                  <tr>
                    <td className="checkbox-column"> <input type="checkbox" className="uniform" /> </td>
                    <td>
                      <div className="progress progress-striped active">
                        <div style={{ width: '80%' }} className="progress-bar progress-bar-warning">
                        </div>
                      </div>
                    </td>
                    <td className="align-center">
                      <ul className="table-controls">
                        <li><a href="javascript:void(0);" className="bs-tooltip" title="Search"><i className="icon-search" /></a> </li>
                        <li><a href="javascript:void(0);" className="bs-tooltip" title="Edit"><i className="icon-pencil" /></a> </li>
                        <li><a href="javascript:void(0);" className="bs-tooltip" title="Delete"><i className="icon-trash" /></a> </li>
                      </ul>
                    </td>
                    <td className="align-center"> <span className="btn-group"> <a href="javascript:void(0);" className="btn btn-xs bs-tooltip" title="Search"><i className="icon-search" /></a> <a href="javascript:void(0);" className="btn btn-xs bs-tooltip" title="Edit"><i className="icon-pencil" /></a> <a href="javascript:void(0);" className="btn btn-xs bs-tooltip" title="Delete"><i className="icon-trash" /></a> </span> </td>
                    <td className="align-center"><span className="label label-success">X</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="widget box">
            <div className="widget-header">
              <h4><i className="icon-reorder" /> Table with Footer</h4>
              <div className="toolbar no-padding">
                <div className="btn-group"> <span className="btn btn-xs widget-collapse"><i className="icon-angle-down" /></span> </div>
              </div>
            </div>
            <div className="widget-content">
              <table className="table table-hover table-striped table-bordered table-highlight-head">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th className="hidden-xs">Username</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Joey</td>
                    <td>Greyson</td>
                    <td className="hidden-xs">joey123</td>
                    <td><span className="label label-success">Approved</span></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Wolf</td>
                    <td>Bud</td>
                    <td className="hidden-xs">wolfy</td>
                    <td><span className="label label-info">Pending</span></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Darin</td>
                    <td>Alec</td>
                    <td className="hidden-xs">alec82</td>
                    <td><span className="label label-warning">Suspended</span></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Andrea</td>
                    <td>Brenden</td>
                    <td className="hidden-xs">andry</td>
                    <td><span className="label label-danger">Blocked</span></td>
                  </tr>
                </tbody>
              </table>
              <div className="row">
                <div className="table-footer">
                  <div className="col-md-6">
                    <div className="table-actions"> <label>Apply action:</label> <select className="select2" data-minimum-results-for-search={-1} data-placeholder="Select action...">
                      <option value />
                      <option value="Edit">Edit</option>
                      <option value="Delete">Delete</option>
                      <option value="Move">Move</option>
                    </select> </div>
                  </div>
                  <div className="col-md-6">
                    <ul className="pagination">
                      <li className="disabled"><a href="javascript:void(0);">← Prev</a></li>
                      <li className="active"><a href="javascript:void(0);">1</a></li>
                      <li><a href="javascript:void(0);">2</a></li>
                      <li><a href="javascript:void(0);">3</a></li>
                      <li><a href="javascript:void(0);">4</a></li>
                      <li><a href="javascript:void(0);">Next →</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Dashboard
