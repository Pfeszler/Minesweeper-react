export const setAdjacentFields = (dimensions, thisField) => {
    const id = thisField.id
    const width = dimensions.width
    const height = dimensions.height
    let adjacentFields
    if (id === 1) {
        adjacentFields = [ id + 1, id + width,  id + width + 1]
        return adjacentFields
    } else
        if (id === width) {
            adjacentFields = [ id - 1, id + width, id + width - 1, ]
            return adjacentFields
        } else
            if (id === width * height - width + 1) {
                adjacentFields = [id - width,  id - width + 1,  id + 1]
                return adjacentFields
            } else
                if (id === width * height) {
                    adjacentFields = [id - width, id - width - 1,  id - 1]
                    return adjacentFields
                } else
                    if (id < width) {
                        adjacentFields = [ id - 1, id + 1, id + width, id + width - 1, id + width + 1]
                        return adjacentFields
                    } else
                        if (id % width === 1) {
                            adjacentFields = [id - width,  id - width + 1, id + 1, id + width,  id + width + 1]
                            return adjacentFields
                        } else
                            if (id % width  === 0) {
                                adjacentFields = [id - width, id - width - 1,  id - 1,  id + width, id + width - 1,]
                                return adjacentFields
                            } else
                                if (id > (width * height - width) + 1   )  {
                                    adjacentFields = [id - width, id - width - 1, id - width + 1, id - 1, id + 1];
                                    return adjacentFields 
                                } else {
                                    adjacentFields = [id - width, id - width - 1, id - width + 1, id - 1, id + 1, id + width, id + width - 1, id + width + 1]
                                    return adjacentFields 
                                }

}
