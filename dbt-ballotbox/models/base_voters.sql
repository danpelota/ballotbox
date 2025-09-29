select *
from read_csv( {{ source("voters", "voters") }} )

