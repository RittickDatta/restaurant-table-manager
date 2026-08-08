import ControlPanel from "../helper-components/control-panel/ControlPanel";

export default function StaffPanel(){


    return (<>
            <ControlPanel title="Staff Management">
              {/* <ControlView detail={{ title: 'Total Staff', value: staff.length }} />
              <ControlView
                detail={{ title: 'Present Staff', value: presentStaff.length }}
              /> */}
              <p>Staff</p>
            </ControlPanel>
    </>)
}