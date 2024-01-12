import swal from "sweetalert";

export function useFlash() {

    function flash(message){

        return swal('Success!',message,'success');
    }

    return {flash};
}