import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// [{isEdit: true, action: (id) => {}}, {isDelete: true, action: (id) => {}}, {isView: true, action: (id) => {}}]

const actionsTbl = ({ id, configs = [] }) => {
    const actions = configs
        .map((config, index) => {
            if (config.isEdit) {
                return {
                    key: `edit-${id}`,
                    onClick: () => config.action(id),
                    label: (
                        <p className="d-flex align-items-center mb-0 pe-2 ps-2">
                            <FontAwesomeIcon className="text-primary me-2" icon={faPencil} />
                            Sửa
                        </p>
                    ),
                };
            }

            if (config.isDelete) {
                return {
                    key: `delete-${id}`,
                    onClick: () => config.action(id),
                    label: (
                        <p className="d-flex align-items-center mb-0 pe-2 ps-2">
                            <FontAwesomeIcon className="text-danger me-2" icon={faTrashCan} />
                            Xóa
                        </p>
                    ),
                };
            }

            return null;
        })
        .filter(Boolean);
    return actions;
};

export default actionsTbl;
