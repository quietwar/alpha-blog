import React from "react"
import Proptypes from "prop-types"

import { SketchPicker } from "react-color"

class Colorpicker extends React.Component {
	render() {
		return (<React.Fragment>
					     <SketchPicker/>
				    </React.Fragment>);
	}
}

Colorpicker.proptypes = {};

export default Colorpicker
